// const fs = require("fs");
// const path = require("path");
// const glob = require("glob");

// function processFile(filePath) {
// 	const code = fs.readFileSync(filePath, "utf-8");

// 	const bankPattern = /new Bank\(\{([\s\S]*?)\}\)/g;

// 	const updatedCode = code.replace(bankPattern, (_, items) => {
// 		const itemLines = items.trim().split(/\r?\n/);
// 		const addLines = itemLines.map((line) => {
// 			const [item, quantity] = line.split(":").map((part) => part.trim());
// 			return `.add(${item}, ${quantity})`;
// 		});

// 		return `new Bank()\n${addLines.join("\n")}`;
// 	});

// 	fs.writeFileSync(filePath, updatedCode, "utf-8");
// }

// function processDirectory(directoryPath) {
// 	const tsFiles = glob.sync(`${directoryPath}/**/*.ts`);

// 	tsFiles.forEach((filePath) => {
// 		processFile(filePath);
// 	});
// }

// // Replace the path with the path to the directory containing your TypeScript files
// const sourceDirectory = "./src";
// processDirectory(sourceDirectory);

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function processFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf-8');

  const bankPattern = /\{([\s\S]*?itemID\(.*?\)[\s\S]*?)\}/g;

  const updatedCode = code.replace(bankPattern, (_, items) => {
    const itemLines = items.trim().split(/\r?\n/);
    const addLines = itemLines.map(line => {
      const [item, quantity] = line.split(':').map(part => part.trim());
      const itemName = item.match(/itemID\('(.*?)'\)/)[1];
      return `.add('${itemName}', ${quantity})`;
    });

    return `new Bank()\n${addLines.join('\n')}`;
  });

  fs.writeFileSync(filePath, updatedCode, 'utf-8');
}

function processDirectory(directoryPath) {
  const tsFiles = glob.sync(`${directoryPath}/**/*.ts`);

  tsFiles.forEach(filePath => {
    processFile(filePath);
  });
}

// Replace the path with the path to the directory containing your TypeScript files
const sourceDirectory = './src';
processDirectory(sourceDirectory);