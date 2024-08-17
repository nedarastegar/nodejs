const express = require("express");
const path= require('path');
const { FormModel } = require("./mongoose/model/form-model");
const {ErrorHandller, NotFoundError} = require ("./utils/errorHandller");
//const expressLayouts = require('express-ejs-layouts');
const app =express();


require("./mongoose/config/mongo.config");
app.use(express.json());
app.use(express.urlencoded({extended : true}))





 app.use(express.static('public'))
 app.set('view engine', 'ejs');
 app.set('views',path.join(__dirname,'resource/views'))
 //app.use(expressLayouts)
 //app.set('layout extractStyles', true);

 app.use(require('./routes'))





 app.use(NotFoundError)
 app.use(ErrorHandller) 
app.listen(3000,()=>{
    console.log("server run in port 3000");
})