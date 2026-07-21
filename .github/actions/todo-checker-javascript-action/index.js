const core = require('@actions/core');
const fs = require('fs');
const path = require('path');

async function getAllFiles(dirPath) {
  let files = await fs.promises.readdir(dirPath, { withFileTypes: true });
  let filePaths = [];
  for (const file of files) {
    const filePath = path.join(dirPath, file.name);
    if (file.isDirectory()) {
      filePaths = filePaths.concat(await getAllFiles(filePath));
    } else {
      filePaths.push(filePath);
    }
  }
  return filePaths;
}

async function findTodosInFiles(files) {
  const todoPattern = /\/\/\s*TODO:.*/g; // Pattern to find TODO comments
  let todos = [];

  for (const file of files) {
    const content = await fs.promises.readFile(file, 'utf-8');
    const matches = content.match(todoPattern);
    if (matches) {
      matches.forEach((todo, index) => {
        const line = content.split('\n').findIndex((line) => line.includes(todo)) + 1;
        todos.push({ file, todo: todo.trim(), line });
      });
    }
  }
  return todos;
}

async function run() {
  try {
    const srcFolder = core.getInput('src-folder') || './src';
    const strictMode = core.getBooleanInput('strict') || false; // Fail workflow if true
    core.info(`Scanning folder: ${srcFolder}`);

    const allFiles = await getAllFiles(srcFolder);
    core.info(`Found ${allFiles.length} files.`);

    const todos = await findTodosInFiles(allFiles);

    if (todos.length > 0) {
      todos.forEach(({ file, todo, line }) => {
        core.warning(`TODO found in ${file} at line ${line}: ${todo}`);
      });

      if (strictMode) {
        core.setFailed(`Found ${todos.length} TODO comments in the codebase.`);
      } else {
        core.info(`Found ${todos.length} TODO comments in the codebase.`);
      }
    } else {
      core.info('No TODO comments found!');
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
