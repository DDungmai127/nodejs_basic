const express = require('express');
import configViewEngine from "./configs/viewEngine";
const path = require('path');
require('dotenv').config();
const app = express();
configViewEngine(app);
const port = process.env.PORT || 1207;
app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.get('/index', (req, res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/about', (req, res) =>{
    res.send(`I'm DungMai`);
})
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })