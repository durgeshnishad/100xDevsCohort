
const express = require('express')
const app = express()
const port = 3000

function calculateSum(counter){
    var sum=0;
    for(var i=1;i<=counter;i++)
        sum+=i;
    return sum;
}


app.get('/handlesum', (req, res) =>{
    var count= req.query.counter;
    var sum= calculateSum(count)
    var answer={
        sum: sum,
    }
    res.send(answer)
})


app.get('/',(req, res)=>{
    res.send('Welcome')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
 




