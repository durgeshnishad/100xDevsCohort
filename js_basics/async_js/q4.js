/*
Array Filter with Callback:
Write a function 'filterArray that takes an array and a callback function as arguments.
'filterArray' should filter the elements of the array based on the condition specified by the callback function 
and return a new array with the filtered elements.
*/

function filterArray(ar, callback){
    function callforEach(element, index, array){
        if(callback(element)== true)
            new_arr.push(element);
    } 
    ar.forEach(callforEach)
}

function modifyArrayElement(element){
    if(element!=5){
        return true;
    }
    else
        return false;
}   
var new_arr=[]
var arr=[1,2,5,4,7,6,5,9]
filterArray(arr, modifyArrayElement)
console.log(new_arr)