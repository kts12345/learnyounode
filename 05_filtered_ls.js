var fs   = require('fs')
var path = require('path')
var _    = require('lodash')
//-----------------------------------
fs.readdir(process.argv[2], onRead);
//-------------`----------------------
function onRead(err, list) {
    if (err) {
        throw err;
    }
    else {
        list.filter(hasExtention).forEach(_.ary(console.log, 1));
    }
};
//-----------------------------------
function hasExtention(file) {
    return path.extname(file) === ('.' + process.argv[3]);
}