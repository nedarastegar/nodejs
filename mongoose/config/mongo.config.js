
const{default:mongoose} = require("mongoose")

mongoose.set("strictQuery",true)



mongoose.connect("mongodb://localhost/todo_db")
.then(() => console.log("Connected To Database"))
.catch((err) => console.log(`-> ${err}`));



