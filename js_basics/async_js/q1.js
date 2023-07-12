/*
Synchronous Callback:
Write a function "higherOrder' that takes a callback function as an argument. Inside
'higherOrder', call the callback function synchronousLy.
*/

function higherOrder(callback){
    callback();
}

function hey(){
    console.log('hey');
}

higherOrder(hey);