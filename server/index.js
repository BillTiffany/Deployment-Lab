const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,"../index.html"))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
  })

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
  })
const port = process.env.PORT || 4242;

app.listen(port, ()=>console.log("The answer is 4242"));