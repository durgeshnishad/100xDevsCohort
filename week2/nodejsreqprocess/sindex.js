function logResponseBody(jsonBody){
    console.log(jsonBody)
}

function results(result){
    console.log(result)
    result.json().then(logResponseBody)
}

var obj={
    method:"GET"
}

fetch("http://localhost:3000/handlesum?counter=10", obj).then(results)