var fs = require('fs')
var _  = require('lodash')
//-----------------------------------
fs.readdir(process.argv[2], onRead);
//-----------------------------------
function onRead(err, list) {
    if (err) {
        throw err;
    }
    else {
        _(list).filter(hasExtention).forEach(log);
    }
};
//-----------------------------------
function hasExtention(fileName) {
    return (new RegExp('.' + process.argv[3] + '$')).test(fileName); 
}

function log(a) {
    console.log(a);
};

