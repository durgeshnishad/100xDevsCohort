/*
File Processing with Callback:
Write a function 'readFileCallback' that takes a filename and a callback function.
readFileCallback' should read the contents of the file asynchronously and pass the pata to the callback Tunction.
*/

fs= require('fs')
function readFileCallback(filename, callback){
    fs.readFile(filename, 'utf-8', callback)
}

function printText(err, data){
    console.log(data)
}
readFileCallback('fileforq5.txt', printText)