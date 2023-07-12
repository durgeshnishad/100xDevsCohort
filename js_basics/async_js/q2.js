/*
Asynchronous Callback:
Write a function 'higherOrderAsync' that takes a callback function as an argument. Inside
'higherOrderAsync', call the callback function asynchronously using settimeout after a delay of n seconds.
where n is current day ot the month according to UTC time (1 <= n <= 31).
*/

function higherOrderAsync(callback){
    const date= new Date();
    var n= date.getDate();
    setTimeout(callback, n*1000);
}

function asynccallback(){
    console.log('function called asynchronously');
}

higherOrderAsync(asynccallback);