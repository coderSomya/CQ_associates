const fs = require('fs').promises;

console.log("hello")


async function readFile(filePath) {
    console.log(filePath)
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

readFile("log.txt")