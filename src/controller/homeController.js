import { json } from "body-parser";
import connection from "../configs/connectDB"
let getHomepage = (req, res) =>{
    //logic theo mô hình MVC
    let data =[];
    connection.query(
        'SELECT * FROM `users`',
        function(err, results, fields) {
          console.log("succes!")
          console.log(results); // results contains rows returned by server
          results.map((row) =>{
              data.push({
                id: row.id,
                email : row.email,
                firstname : row.firstname,
                lastname : row.lastname
              })
          }) 
          //console.log(fields);  fields contains extra meta data about results, if available
        return res.render('index.ejs', {dataUser : JSON.stringify(data)} )   ;

        }
      );
}

module.exports = {
    getHomepage

}