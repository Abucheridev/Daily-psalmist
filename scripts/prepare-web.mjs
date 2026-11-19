
import { mkdir, copyFile } from "node:fs/promises";

const files = [
  "index.html",
  "style.css",
  "config.js"
];

await mkdir("www", { recursive: true });

for (const file of files) {
  await copyFile(file, `www/${file}`);
}

console.log("Daily Psalmist web files prepared.");
