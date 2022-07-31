const fs = require("fs");
const { Console } = require("node:console");

// define files to log to
const outputLog = fs.createWriteStream("./output.log");
const errorLog = fs.createWriteStream("./error.log");

// custom simple logger
const logger = new Console({
  stdout: outputLog,
  stderr: errorLog,
  groupIndentation: 5,
});

//use it like console
const count = 5;
logger.log(`count: ${count}`);
logger.error("an error occurred");

logger.group("Custom logger group");
logger.log("Inside group");
logger.groupEnd();
