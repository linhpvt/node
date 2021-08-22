const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

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

// create a writable stream to write the compressed chunck
const compressedWritable = fs.createWriteStream(COMPRESSED_PATH);

// create a zlib to compress data
const gliz = zlib.createGzip();

// pipe to writable
readable.pipe(writable);

readable.pipe(gliz).pipe(compressedWritable);

// free all memories
readable.on('end', function () {
  // release resource
  readable.close();
});
writable.on('finish', function () {
  // release resource
  writable.close();
});

compressedWritable.on('finish', function () {
  // release resource
  compressedWritable.close();
});
