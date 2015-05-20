var fs = require('fs')
var _ = require('lodash')

//-----------------------------------
fs.readFile(process.argv[2], onRead);

//-----------------------------------
function onRead(err, data) {
    if (err) {
        throw err;
    }
    else {
        console.log(_(data).filter(newLine).size());

        function newLine(c) { return c == '\n'.charCodeAt(0); }
    }
};
