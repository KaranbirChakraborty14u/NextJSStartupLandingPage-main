const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://harshlahoty85:qwertyuiop@cluster0.ky9y0ov.mongodb.net/LoginSignUpTutorial")
.then( () => {
    console.log("mongodb connected");
})
.catch( () => {
    console.log("failed to connect");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection=new mongoose.model("Collection1",LogInSchema)

module.exports=collection