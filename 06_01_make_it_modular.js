﻿var _      = require('lodash');
var filter = require('./06_02_make_it_modular'); 

var dir = process.argv[3];
var ext = process.argv[3];

filter(dir, ext, print);

function print(err, list) {
    if (err)
        console.log("err :" + err);
    else
        list.forEach(_.ary(console.log, 1));
};

/*  
    ─────────────────────────────────────────────────
        MAKE IT MODULAR  / Exercise 6 of 13
    ─────────────────────────────────────────────────

This problem is the same as the previous but introduces the concept of modules.
You will need to create two files to solve this.

Create a program that prints a list of files in a given directory, filtered by t
he extension of the files. The first argument is the directory name and the 
second argument is the extension filter. Print the list of files (one file per 
line) to the console. You must use asynchronous I / O.

You must write a module file to do most ofthe work. The module must export a 
single function that takes three arguments: the directory name, the filename 
extension string and a callback function, in that order. The filename extension 
argument must be the same as what was passed to your program. Don't turn it into 
a RegExp or prefix with "." or do anything except pass it to your module where 
you can do what you need to make your filter work.

The callback function must be called using the idiomatic node(err, data) 
convention. This convention stipulates that unless there is an error, the first 
argument passed to the callback will be null, and the second will be your data.
In this exercise, the data will be your filtered list of files, as an Array. If 
you receive an error, e.g.from your call to fs.readdir(), the callback must be 
called with the error, and only the error, as the first argument.

You must not print directly to the console from your module file, only from your
original program.

In the case of an error bubbling up to your original program file, simply check
for it and print an informative message to the console.

These four things are the contract that your module must follow.

  * Export a single function that takes exactly the arguments described.
  * Call the callback exactly once with an error or some data as described.
  * Don't change anything else, like global variables or stdout.
  * Handle all the errors that may occur and pass them to the callback.

The benefit of having a contract is that your module can be used by anyone who 
expects this contract. So your module could be used by anyone else who does 
learnyounode, or the verifier, and just work.

-------------------------------------------------------------------------------
# HINTS

Create a new module by creating a new file that just contains your directory rea
ding and filtering function. To define a single function export, you assign your
function to the module.exports object, overwriting what is already there:

module.exports = function (args) { /* ... * / }

Or you can use a named function and assign the name.

To use your new module in your original program file, use the require() call in
the same way that you require('fs') to load the fs module. The only difference 
is that for local modules must be prefixed with './'. So, if your file is named 
mymodule.js then:

    var mymodule = require('./mymodule.js')

The '.js' is optional here and you will often see it omitted.

You now have the module.exports object in your module assigned to the mymodule 
variable. Since you are exporting a single function, mymodule is a function you 
can call!

Also keep in mind that it is idiomatic to check for errors and do early-returns
within callback functions:

    function bar (callback) {
        foo(function (err, data) {
            if (err)
                return callback(err) // early return

            // ... no error, continue doing cool things with `data`

            // all went well, call callback with `null` for the error argument

            callback(null, data)
        })
    }

*/