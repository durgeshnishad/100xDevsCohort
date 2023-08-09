const express = require('express')
const app = express()
const port = 3000

function calculateSum(counter){
    var sum=0;
    for(var i=1;i<=counter;i++)
        sum+=i;
    return sum;
}

var n=0;
function middlewares(req, res, next){
    n++;
    console.log(n);
    next();
}
app.use(middlewares)

app.get('/handlesum-query', (req, res)=>{
    var count= req.query.counter;
    var sum= calculateSum(count)
    res.send('the total sum is: '+sum)
})

app.post('/handlesum-headers', (req, res)=>{
    var count= req.headers.counter;
    var sum= calculateSum(count)
    res.send('the total sum is: '+sum)
})

app.get('/',(req, res)=>{
    res.send('Welcome')
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})