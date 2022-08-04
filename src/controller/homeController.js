let getHomepage = (req, res) =>{
    //logic theo mô hình MVC
    return res.render('index.ejs')

}

module.exports = {
    getHomepage

}