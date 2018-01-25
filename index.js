const diff = require('diff-hg');
const path = require('path');

let file1 = path.resolve(__dirname, 'files/aaa');
let file2 = path.resolve(__dirname, 'files/bbb');
let file3 = path.resolve(__dirname, 'files/ccc');

diff.compare(file1, [file2, file3], (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Succeeded!');
    }

    process.exit();
});