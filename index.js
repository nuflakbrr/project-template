#!/usr/bin/env node

import * as p from '@clack/prompts';
import { setTimeout } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';
import color from 'picocolors';
import shell from 'shelljs';
import path from 'node:path';
import fs from 'node:fs';

// Configuration constants
const CONFIG = {
    SKIP_FILES: ['node_modules', 'build', 'dist'],
    FRONTEND_TEMPLATES: ['reactjs-ts', 'reactjs-js', 'nextjs-ts', 'nextjs-js'],
    TEMPLATE_OPTIONS: [
        { value: 'reactjs-ts', label: 'React.js (Tailwind + TypeScript)' },
        { value: 'reactjs-js', label: 'React.js (Tailwind + JavaScript)' },
        { value: 'nextjs-ts', label: 'Next.js App Router (Tailwind + TypeScript)' },
        { value: 'nextjs-js', label: 'Next.js App Router (Tailwind + JavaScript)' },
        { value: 'laranextjs-ts', label: 'Laravel Breeze API w/ Next.js App Router (Tailwind + TypeScript)' },
    ],
    PACKAGE_MANAGERS: [
        { value: 'npm', label: 'NPM' },
        { value: 'yarn', label: 'Yarn' },
        { value: 'bun', label: 'Bun' },
        { value: 'pnpm', label: 'PNPM' },
    ]
};

// Utility functions
const getOperatingSystem = () => {
    const platform = process.platform;
    const osMap = {
        darwin: 'mac',
        win32: 'windows',
        linux: 'linux'
    };
    return osMap[platform] || 'unknown';
};

const validateProjectPath = (value) => {
    if (!value) return 'Please enter a path.';
    if (value[0] !== '.') return 'Please enter a relative path.';
    return;
};

const validateProjectDirectory = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        return true;
    }

    if (fs.readdirSync(dirPath).length > 0) {
        p.cancel('Directory is not empty! Please create a project in an empty directory.');
        process.exit(1);
    }
    return true;
};

// Template handling
const replicateTemplates = async (templatePath, projectPath) => {
    const templateFiles = fs.readdirSync(templatePath)
        .filter(name => !CONFIG.SKIP_FILES.includes(name));

    templateFiles.forEach(name => {
        const originPath = path.join(templatePath, name);
        const destinationPath = path.join(projectPath, name);
        const stats = fs.statSync(originPath);

        if (stats.isFile()) {
            fs.writeFileSync(destinationPath, fs.readFileSync(originPath, 'utf8'));
        } else if (stats.isDirectory()) {
            if (!fs.existsSync(destinationPath)) {
                fs.mkdirSync(destinationPath);
            }
            replicateTemplates(originPath, destinationPath);
        }
    });
};

// Project setup functions
const setupFrontendProject = (projectPath, templateType) => {
    shell.cd(projectPath);
    const os = getOperatingSystem();
    const silentFlag = os === 'windows' ? '> nul 2>&1' : '> /dev/null 2>&1';

    shell.exec(`npx degit nuflakbrr/frontend-template#${templateType} . --silent ${silentFlag}`);
};

const installDependencies = async (projectPath, projectName, spinner) => {
    const packageManager = await p.select({
        message: `Pick a package manager to install dependencies for "${projectName}"`,
        initialValue: 'npm',
        options: CONFIG.PACKAGE_MANAGERS,
    });

    if (packageManager) {
        spinner.start(`📦 Installing dependencies using ${packageManager}...`);
        await setTimeout(2500);

        shell.cd(projectPath);
        shell.exec(`${packageManager} install --silent`);

        return packageManager;
    }
    return null;
};

const displayNextSteps = (projectPath, packageManager, install) => {
    let nextSteps = '';

    if (install) {
        nextSteps = `cd ${projectPath}
${packageManager} run dev

${color.underline(color.cyan('Happy Coding!'))}`;
    } else {
        nextSteps = `cd ${projectPath}
${packageManager} install
${packageManager} run dev

${color.underline(color.cyan('Happy Coding!'))}`;
    }

    const contact = `Have a Problems? Report to ${color.underline(color.cyan('https://github.com/nuflakbrr/bikinproject/issues'))}`;

    p.note(nextSteps, 'Next steps.');
    p.outro(contact);
};

// Main application flow
async function main() {
    console.clear();
    await setTimeout(1000);
    p.intro(`${color.bgCyan(color.black(' create-bikinproject-app '))}`);

    const project = await p.group(
        {
            path: () => p.text({
                message: 'Where should we create your project?',
                placeholder: './your-project',
                validate: validateProjectPath,
            }),
            type: ({ results }) => p.select({
                message: `Pick a starter project type within "${results.path}"`,
                initialValue: 'react-ts-template',
                options: CONFIG.TEMPLATE_OPTIONS,
            }),
        },
        {
            onCancel: () => {
                p.cancel('Operation cancelled.');
                process.exit(1);
            },
        }
    );

    if (!project) return;

    const spinner = p.spinner();
    const projectPath = path.join(process.cwd(), project.path);
    const templatePath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'templates', project.type);

    spinner.start('⏳ Creating project...');
    await setTimeout(2500);

    validateProjectDirectory(project.path);

    if (CONFIG.FRONTEND_TEMPLATES.includes(project.type)) {
        setupFrontendProject(project.path, project.type);
    } else {
        await replicateTemplates(templatePath, projectPath);
    }

    spinner.stop('✅ Project created!');

    if (fs.existsSync(path.join(projectPath, 'package.json'))) {
        const install = await p.confirm({
            message: `Do you want to install dependencies for ${project.path}?`,
            initialValue: true,
        });

        if (install) {
            const packageManager = await installDependencies(projectPath, project.path, spinner);
            if (packageManager) {
                spinner.stop('✅ Dependencies installed!');
                p.log.step('🎉 Project ready to use!');
                displayNextSteps(project.path, packageManager, install);
                return;
            }
        }
    }

    spinner.stop('🎉 Project created!');
    displayNextSteps(project.path, 'npm');
}

main().catch(console.error);