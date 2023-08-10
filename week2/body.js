const express = require('express')
const app = express()
var bodyparser= require('body-parser')
const port = 3000

function calculateSum(counter){
    var sum=0;
    for(var i=1;i<=counter;i++)
        sum+=i;
    return sum;
}

app.use(bodyparser.json())

app.post('/handlesum-body', (req, res)=>{
    var count= req.body.counter;
    if(count<10000){
        var sum= calculateSum(count)
        res.send('the total sum is: '+sum)
    }
    else{
        res.status(411).send("You've entered a big number")
    }
})

app.get('/',(req, res)=>{
    res.send('Welcome')
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})