const fs = require('fs');

const searchString = process.argv[2];

const fileContent = fs.readFileSync('example.txt', 'utf8');

const exists = fileContent.includes(searchString);

console.log(exists);