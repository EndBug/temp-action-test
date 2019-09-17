const fs = require('fs');
const path = require('path').join(__dirname, './changed_file.txt');

fs.writeFileSync(path, (new Date()) + '')