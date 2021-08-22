const fs = require('fs');
const path = require('path');

const READ_PATH = path.resolve(__dirname, './data.txt');
console.log(READ_PATH);
const WRITE_PATH = path.resolve(__dirname, './data.copy.txt');
const COMPRESSED_PATH = path.resolve(__dirname, './data.zip.gz');

// create a readable stream
const readable = fs.createReadStream(READ_PATH, {
  // chunck is represented as UTF8 encoding, default is Buffer
  encoding: 'utf-8',
  // limit data in memory as Buffer: 1Kb of each chunck
  highWaterMark: 1 * 1024, // 1Kb
});

// create a writable stream
const writable = fs.createWriteStream(WRITE_PATH);

// every chunk arrival will be written to the file
readable.on('data', function (chunck) {
  console.log(chunck.length);
  writable.write(chunck);
});

// free all memories
readable.on('end', function () {
  // release resource
  readable.close();
});
writable.on('finish', function () {
  // release resource
  writable.close();
});
