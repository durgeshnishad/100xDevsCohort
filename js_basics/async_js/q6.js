/* Parallel Execution with Callbacks:
Implement a function 'parallelfileOperation' that returns an array of size 2 with the first index 
containing the contents of the file 'a.txt in UTF-8 encoding. If a.txt doesn't exist, then throw an error. 
The second element of the array contains 1 if the text 'Hello! is successfully written to the file b.txt 
and 0 if the write operation fails. */
 
fs= require('fs');

function parallelfileOperation(){
    
    function readfromA(err, data){
        if(err){
            throw err;
        }
        else{
            arr.push(data);
        }

        if(arr.length==2)
            console.log(arr)
    }
    
    function writetoB(err){
        if(err)
            arr.push(0);
        else
            arr.push(1);

        if(arr.length==2)
            console.log(arr)
    }
    
    var arr=[];
    fs.readFile('a.txt', 'utf-8', readfromA)
    fs.writeFile('b.txt', 'Hello!', 'utf-8', writetoB)
}

parallelfileOperation();