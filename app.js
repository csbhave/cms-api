const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('<h1> express demo</h1>');
});

app.get('/user', (req,res)=>{
    res.send([
        {
            username: 'chinmay',
            password:'123456789'
        }
    ]);
});

app.listen(port, ()=>{
    console.log(`express demo is run on port: ${port}`);
})