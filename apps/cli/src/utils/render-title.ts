import gradient from "gradient-string";

export const TITLE_TEXT = `
██████╗ ██╗██╗  ██╗██╗███╗   ██╗
██╔══██╗██║██║ ██╔╝██║████╗  ██║
██████╔╝██║█████╔╝ ██║██╔██╗ ██║
██╔══██╗██║██╔═██╗ ██║██║╚██╗██║
██████╔╝██║██║  ██╗██║██║ ╚████║
╚═════╝ ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝

██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝
`;

export const renderTitle = () => {
  const terminalWidth = process.stdout.columns || 80;
  const titleLines = TITLE_TEXT.split("\n");
  const titleWidth = Math.max(...titleLines.map((line) => line.length));

  if (terminalWidth < titleWidth) {
    const simplifiedTitle = `BikinProject`;
    console.log(simplifiedTitle);
  } else {
    console.log(TITLE_TEXT);
  }
};
