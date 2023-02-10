const express = require('express')

const app = express()

app.get('/', (req,res,next) => {
    console.log(req.url)
    console.log(req.method)
    res.send("Server running")
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})
