var fs   = require('fs')
var path = require('path')
var _    = require('lodash')

fs.readdir(process.argv[2], onRead);

function onRead(err, list) {
    if (err) {
        throw err;
    }
    else {
        list.filter(extMatch).forEach(_.ary(console.log, 1));
    }
};

function extMatch(file) {
    return path.extname(file) === ('.' + process.argv[3]);
}

/*
    式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式
        FILTERED LS / Exercise 5 of 13
    式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式式


Create a program that prints a list of files in a given directory, filtered by 
the extension of the files. You will be provided a directory name as the first 
argument to your program(e.g. '/path/to/dir/') and a file extension to filter by
as the second argument.

For example, if you get 'txt' as the second argument then you will need to 
filter the list to only files that end with .txt. Note that the second argument 
will not come prefixed with a '.'.

The list of files should be printed to the console, one file per line.You must
use asynchronous I / O.

-------------------------------------------------------------------------------
# HINTS

The fs.readdir() method takes a pathname as its first argument and a callback as
its second. The callback signature is:

    function callback(err, list) { /* ... * / }

where list is an array of filename strings.

Documentation on the fs module can be found by pointing your browser here:
    file://C:\Users\kts123.NEOWIZ\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html

You may also find node's path module helpful, particularly the extname method.

Documentation on the path module can be found by pointing your browser here:
file://C:\Users\kts123.NEOWIZ\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\path.html

*/