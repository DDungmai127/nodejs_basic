const express = require('express');
import configViewEngine from "./configs/viewEngine";
import initWebRoute from './route/web'
const path = require('path');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 1207;
// set view engin
configViewEngine(app);

// init web route
initWebRoute(app);

// test
// app.get('/index', (req, res)=>{
//     res.sendFile(path.join(__dirname+'/index.html'));
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})