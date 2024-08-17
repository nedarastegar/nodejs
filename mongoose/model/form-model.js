
const {Schema,model} = require("mongoose");

const FormSchema = new Schema({
title:{ type:String,required:true, trim:true},
text:{ type:String,required:true, trim:true}

})

const FormModel = model("Form", FormSchema);
module.exports={
    FormModel,
}