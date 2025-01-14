#!/usr/bin/env node

import * as p from '@clack/prompts';
import { setTimeout } from 'node:timers/promises';
// import { fileURLToPath } from 'node:url';
import color from 'picocolors';
import shell from 'shelljs';
import path from 'node:path';
import fs from 'node:fs';

// Configuration constants
const CONFIG = {
    SKIP_FILES: ['node_modules', 'build', 'dist'],
    FRONTEND_TEMPLATES: ['reactjs-ts', 'reactjs-js', 'nextjs-ts', 'nextjs-js'],
    FULLSTACK_TEMPLATES: ['laranext-ts', 'laravel-filament'],
    TEMPLATE_OPTIONS: [
        { value: 'reactjs-ts', label: 'React.js (Tailwind + TypeScript)' },
        { value: 'reactjs-js', label: 'React.js (Tailwind + JavaScript)' },
        { value: 'nextjs-ts', label: 'Next.js App Router (Tailwind + TypeScript)' },
        { value: 'nextjs-js', label: 'Next.js App Router (Tailwind + JavaScript)' },
        { value: 'laranext-ts', label: 'Laravel Breeze API w/ Next.js App Router (Tailwind + TypeScript)' },
        { value: 'laravel-filament', label: 'Laravel + Filament' },
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
        p.log.error('Directory is not empty! Please create a project in an empty directory.');
        process.exit(1);
    }
    return true;
};

// Template handling
// const replicateTemplates = async (templatePath, projectPath) => {
//     try {
//         const templateFiles = fs.readdirSync(templatePath)
//             .filter(name => !CONFIG.SKIP_FILES.includes(name));

//         templateFiles.forEach(name => {
//             const originPath = path.join(templatePath, name);
//             const destinationPath = path.join(projectPath, name);
//             const stats = fs.statSync(originPath);

//             if (stats.isFile()) {
//                 fs.writeFileSync(destinationPath, fs.readFileSync(originPath, 'utf8'));
//             } else if (stats.isDirectory()) {
//                 if (!fs.existsSync(destinationPath)) {
//                     fs.mkdirSync(destinationPath);
//                 }
//                 replicateTemplates(originPath, destinationPath);
//             }
//         });
//         return true;
//     } catch (error) {
//         p.log.error(`Failed to replicate templates: ${error.message}`);
//         process.exit(1);
//     }
// };

// Project setup functions
const setupFrontendProject = async (projectPath, templateType) => {
    try {
        shell.cd(projectPath);
        const os = getOperatingSystem();
        const silentFlag = os === 'windows' ? '> nul 2>&1' : '> /dev/null 2>&1';

        const result = shell.exec(`npx degit nuflakbrr/frontend-template#${templateType} . --silent ${silentFlag}`);
        if (result.code !== 0) {
            p.log.error('Failed to setup frontend project');
            process.exit(1);
        }
        return true;
    } catch (error) {
        p.log.error(`Failed to setup frontend project: ${error.message}`);
        process.exit(1);
    }
};

const setupFullstackProject = async (projectPath, templateType) => {
    try {
        shell.cd(projectPath);
        const os = getOperatingSystem();
        const silentFlag = os === 'windows' ? '> nul 2>&1' : '> /dev/null 2>&1';

        const result = shell.exec(`npx degit nuflakbrr/fullstack-template#${templateType} . --silent ${silentFlag}`);
        if (result.code !== 0) {
            p.log.error('Failed to setup fullstack project');
            process.exit(1);
        }
        return true;
    } catch (error) {
        p.log.error(`Failed to setup fullstack project: ${error.message}`);
        process.exit(1);
    }
};

const installDependencies = async (originalPath, projectName, spinner) => {
    try {
        const packageManager = await p.select({
            message: `Pick a package manager to install dependencies for "${projectName}"`,
            initialValue: 'npm',
            options: CONFIG.PACKAGE_MANAGERS,
        });

        if (packageManager) {
            spinner.start(`📦 Installing dependencies using ${packageManager}...`);
            await setTimeout(2500);
            shell.cd(originalPath);
            const os = getOperatingSystem();
            const silentRedirect = os === 'windows' ? '2>NUL' : '2>/dev/null';

            const commands = {
                npm: `npm install --silent ${silentRedirect}`,
                yarn: `yarn install --silent ${silentRedirect}`,
                bun: `bun install --silent --no-summary ${silentRedirect}`,
                pnpm: `pnpm install --silent ${silentRedirect}`
            };

            const installCommand = commands[packageManager];
            if (!installCommand) {
                p.log.error(`Unsupported package manager: ${packageManager}`);
            }

            const result = shell.exec(installCommand);

            if (result.code !== 0) {
                spinner.stop(`Failed to install dependencies using ${packageManager}`);
                if (result.stderr) {
                    console.error(`Error details: ${result.stderr}`);
                }
                process.exit(1);
            }

            return packageManager;
        }
        return null;
    } catch (error) {
        p.log.error(`Failed to install dependencies: ${error.message}`);
        process.exit(1);
    }
};

const displayNextSteps = (projectPath, packageManager, install = false) => {
    const nextSteps = install
        ? `cd ${projectPath}\n${packageManager} run dev\n\n${color.underline(color.cyan('Happy Coding!'))}`
        : `cd ${projectPath}\n${packageManager} install\n${packageManager} run dev\n\n${color.underline(color.cyan('Happy Coding!'))}`;

    const contact = `Have a Problems? Report to ${color.underline(color.cyan('https://github.com/nuflakbrr/bikinproject/issues'))}`;

    p.note(nextSteps, 'Next steps.');
    p.outro(contact);
};

// Main application flow
async function main() {
    try {
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
        // const templatePath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'templates', project.type);

        try {
            spinner.start('⏳ Creating project...');
            await setTimeout(2500);

            validateProjectDirectory(project.path);

            if (CONFIG.FRONTEND_TEMPLATES.includes(project.type)) {
                await setupFrontendProject(project.path, project.type);
            } else if (CONFIG.FULLSTACK_TEMPLATES.includes(project.type)) {
                await setupFullstackProject(project.path, project.type);
            }

            spinner.stop('✅ Project created successfully!');

            if (fs.existsSync(path.join(projectPath, 'package.json'))) {
                const install = await p.confirm({
                    message: `Do you want to install dependencies for ${project.path}?`,
                    initialValue: true,
                });

                if (install) {
                    const packageManager = await installDependencies(projectPath, project.path, spinner);
                    if (packageManager) {
                        spinner.stop('✅ Dependencies installed successfully!');
                        p.log.step('🎉 Project ready to use!');
                        displayNextSteps(project.path, packageManager, true);
                        return;
                    }
                }
            }

            displayNextSteps(project.path, 'npm');
        } catch (error) {
            spinner.stop(`❌ Error: ${error.message}`);
            process.exit(1);
        }
    } catch (error) {
        p.log.error(`Fatal error: ${error.message}`);
        process.exit(1);
    }
}

main().catch((error) => {
    p.log.error(`Unhandled error: ${error.message}`);
    process.exit(1);
});