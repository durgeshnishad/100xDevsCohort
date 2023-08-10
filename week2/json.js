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


function calculateMul(counter){
    var mul=1;
    for(var i=1;i<=counter;i++)
        mul*=i;
    return mul;
}

app.use(bodyparser.json())

app.post('/handlesum-body', (req, res)=>{
    var count= req.body.counter;
    var sum= calculateSum(count)
    var multi= calculateMul(count)
    var answer={
        addition: sum,
        product: multi,
    }
    res.status(200).send(answer)
})

app.get('/',(req, res)=>{
    res.send('Welcome')
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})