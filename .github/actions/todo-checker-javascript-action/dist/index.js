/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 634:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = __nccwpck_require__(634);
const fs = __nccwpck_require__(896);
const path = __nccwpck_require__(928);

// Function to get all files from a directory recursively
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

// Function to find TODO comments in files
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

// Main function to run the action
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
module.exports = __webpack_exports__;
/******/ })()
;