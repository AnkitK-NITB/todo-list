require('dotenv').config()
const express = require('express')
const listsroutes = require('./routes/lists')

const app = express()

app.use((req, res, next)=>{
        console.log(req.path, req.method)
        next()
})

// routes
app.use('/api/lists',listsroutes)

// listen for requests
app.listen(process.env.PORT, ()=>{
        console.log("Listening on PORT:", process.env.PORT)
})