const express = require('express');
require('dotenv').config()

const app = express();

const port = 3000;


app.get('/',(req,res)=>{
    
    res.send('hello world')
})

app.get('/twitter',(req,res)=>{
    
    res.send('welcome to twitter')
})

app.get('/login',(req,res)=>{
    
    res.send('<h1>welcome to login page</h1>')
})

app.listen(process.env.PORT,()=>{

    console.log(`listening on ${port}`);
}) 