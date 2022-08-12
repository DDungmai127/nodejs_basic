const express = require('express');
import configViewEngine from "./configs/viewEngine";
import initWebRoute from './route/web'
import connection  from "./configs/connectDB";
const path = require('path');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 1207;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
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