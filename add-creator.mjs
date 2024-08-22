import fs from "fs";

const FOLDER = "./src/content/creators";

const OUTPUT = `./${FOLDER}/${process.argv[2]}.md`;

let document = `---\n`;

document += `username: ${process.argv[2]}\n`;
document += `topic: TEMA\n`;
document += `tags: \n  - TAG1\n  - TAG2\n`;
document += `createdAt: ${new Date().toISOString()}\n`;
document += "---\n";

fs.writeFileSync(OUTPUT, document);

console.log("File created at:", OUTPUT);
