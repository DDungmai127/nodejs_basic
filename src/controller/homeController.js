import { json } from "body-parser";
import pool from "../configs/connectDB"
let getHomepage =async(req, res) =>{
    //logic theo mô hình MVC
    let data =[];
    const [rows, fields] = await pool.execute('SELECT * FROM users');
/* giải thích:
- cú pháp ở trên là một arr destructure
- cái await pool.excute thì mình chưa hiểu lắm, tuy nhiên ta biết được là nó sẽ trả về một array gồm
rows và fields như tên mình đặt cho nó thôi*/
    return res.render('index.ejs', {dataUser : rows} )   ;
}
let getDetailPage = async(req, res) =>{
  let userId = req.params.id;
  let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
  return res.send(JSON.stringify(user))
}
module.exports = {
  getHomepage, getDetailPage 

}
    // connection.query(
    //     'SELECT * FROM `users`',
    //     function(err, results, fields) {
    //       console.log("succes!")
    //       console.log(results); // results contains rows returned by server
    //       results.map((row) =>{
    //           data.push({
    //             id: row.id,
    //             email : row.email,
    //             firstname : row.firstName,
    //             lastname : row.lastName
              
    //           })
            
    //       }) 
    //       //console.log(fields);  fields contains extra meta data about results, if available


    //     // cái đoạn này, là truyền data qua view đấy. Cấu trúc hàm render nó gồm có render(file view, object data<đây sẽ là data>);
    //     // object data được viết dưới dạng key : value, key sẽ được sử dụng trong file view nữa
    //     // ta có thể truyền thêm data chỉ cần nó ngăn cách bởi dấu phẩy.
    //     // ví dụ: return res.render('index.ejs', {dataUser : (data) , test : "Hello my friend"} )   ;
        

    //     // DO đó nó là cái vai trò của view engine nó giúp mình có thể code html mà vẫn có biến của controll
    //     }

    //   );
