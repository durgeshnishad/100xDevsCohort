/*
Array Filter with Callback:
Write a function 'filterArray that takes an array and a callback function as arguments.
'filterArray' should filter the elements of the array based on the condition specified by the callback function 
and return a new array with the filtered elements.
*/

function filterArray(ar, callback){
    ar.forEach(callback)
    console.log(new_arr)
}

function modifyArrayElement(element, index, array){
    if(element!=5){
        new_arr.push(element);
    }
}   
var new_arr=[]
var arr=[1,2,5,4,7,6,5,9]
new_arr=filterArray(arr, modifyArrayElement)
