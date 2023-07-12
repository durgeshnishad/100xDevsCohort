/*Array Map with Callback:
Implement a function 'mapArray that takes an array and a callback function as arguments.
'mapArray' should apply the callback function to each element of the array and return a new array with the moditied values.
 */

function mapArray(ar, callback){
    for(var i=0;i<ar.length;i++){
        ar[i]=callback(ar[i]);
     }
     console.log(ar);
}

function modifyArrayElement(element){
    element=1;    
    return element;
}

var arr=[1,2,3,4,5,6];
mapArray(arr, modifyArrayElement);