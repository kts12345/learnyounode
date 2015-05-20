var fs = require('fs')
var _ = require('lodash')

//-----------------------------------
var err, data;
try {
    data = fs.readFileSync(process.argv[2]);
}
catch (e) {
    err = e;
}
onRead(err, data);
//-----------------------------------
function onRead(err, data) {
    if (err) {
        throw err;
    }
    else {
        console.log(_(data).filter(newLine).size());
    }
};
//-----------------------------------
function newLine(c) { return c == '\n'.charCodeAt(0); }
