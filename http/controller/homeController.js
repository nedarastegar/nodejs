
const FormModel= require('./../../mongoose/model/form-model');
class homeController{
    index(req,res){
        res.render('home/index');
    }


    async showform(req,res){
    
    const addform = await FormModel.create({
        title,
        text
    })

    
}
}
module.exports = new homeController();