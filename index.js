const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/index.html'))
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/features.html'))
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/pricing.html'))
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/contact.html'))
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/login.html'))
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/getstarted.html'))
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})

