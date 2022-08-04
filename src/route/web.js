import express from 'express';
import homeController from "../controller/homeController"
// setup route
let router = express.Router();
const initWebRoute = (app) =>{
    router.get('/', homeController.getHomepage );
        // res.render('index.ejs') , Nếu để thế này thì là theo mô hình client server       
    
    router.get('/about', (req, res) =>{
        res.send(`I'm DungMai`); 
    })
    return app.use('/', router);

/* Comment : Ở trong câu lệnh return kia, nếu ta thay cái '/' thành abc thì trên web khi init website thì càn phải
nhập đường dẫn là localhost:5000/abc/ or :5000/abc/about */
}
export default initWebRoute;