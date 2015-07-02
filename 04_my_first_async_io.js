var fs = require('fs');
var _  = require('lodash');

fs.readFile(process.argv[2], onRead);

function onRead(err, data) {
    if (err) 
        console.error(err);
    else 
        console.log(_(data).filter(newLine).size());
};

function newLine(c) { return c == '\n'.charCodeAt(0); }

/*  
    ��������������������������������������������������������������������������������������������������
        MY FIRST ASYNC I/O! / Exercise 4 of 13
    ��������������������������������������������������������������������������������������������������
Write a program that uses a single asynchronous filesystem operation to read a 
file and print the number of newlines it contains to the console(stdout), 
similar to running cat file | wc - l.

The full path to the file to read will be provided as the first command-line 
argument.

-------------------------------------------------------------------------------
# HINTS

The solution to this problem is almost the same as the previous problem except 
you must now do it theNode.js way: asynchronous.

Instead of fs.readFileSync() you will want to use fs.readFile() and instead of 
using the return value of this method you need to collect the value from a 
callback function that you pass in as the second argument. To learn more about 
callbacks, check out: [https://github.com/maxogden/art-of-node#callbacks]
(https://github.com/maxogden/art-of-node#callbacks).

Remember that idiomatic Node.js callbacks normally have the signature:

    function callback(err, data) { /* ... * / }

so you can check if anerror occurred by checking whether the first argument is
truthy.If there is no error, you should have your Buffer object as the second 
argument. As with readFileSync(), youcan supply 'utf8' as the second argument 
and put the callback as the third argument and you will get a String instead of 
a Buffer.

Documentation on the fs module can be found by pointing your browser here:
    file://C:\Users\kts123.NEOWIZ\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html

*/