// const fs= require("fs");

// function readaFile(err, data){
//     console.log(data);
// }
// fs.readFile('a.txt', 'utf-8', readaFile)

const express = require('express')
const app = express()
const port = 3000

function calculateSum(counter){
    var sum=0;
    for(var i=1;i<=counter;i++)
        sum+=i;
    return sum;
}


app.get('/handlesum-queryparam', (req, res) =>{
    var count= req.query.counter;
    var sum= calculateSum(count)
    res.send('The sum is '+sum)
})

app.post('/handlesum-headers', (req, res) =>{
    console.log(req.body)
    var count= req.headers.counter;
    var sum= calculateSum(count)
    res.send('The sum is '+sum)
})

app.get('/',(req, res)=>{
    res.send('Welcome')
})

app.get('/:username',(req, res) =>{
    res.send('HEHE')
})

function done(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port, done)
 




