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

// app.get('/handlesum-query', (req, res)=>{
//     var count= req.query.counter;
//     var sum= calculateSum(count)
//     res.send('the total sum is: '+sum)
// })

app.post('/handlesum-headers', (req, res)=>{
    var count= req.body.counter;
    var sum= calculateSum(count)
    res.send('the total sum is: '+sum)
})

app.get('/',(req, res)=>{
    res.send('Welcome')
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})