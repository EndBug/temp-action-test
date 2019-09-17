const fs = require('fs');
const path = require('path').join(__dirname, './changed_file.txt');

console.log("RUNNING")

fs.writeFileSync(path, (new Date()) + '');

console.log('ENDED')