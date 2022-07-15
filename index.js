const express = require('express')
const app = express()
require('./Database/conn')

// middlewares
app.use(express.json())

// routes
app.get("/", (req,res) => {
    res.send('test')
})

app.listen(3000, ()=> {
    console.log('running: http://localhost:3000')
})