const express = require('express')
import configViewEngine from "./configs/viewEngine";
const app = express()
const path = require('path');
configViewEngine(app);
const port = 2000;
app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.get('/index', (req, res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/about', (req, res) =>{
    res.send(`I'm DungMai`);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})