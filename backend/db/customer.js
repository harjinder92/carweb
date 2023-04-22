const mongoose=require("mongoose");
const customSchema=mongoose.Schema({
    email:String,
    mobile:String
})

module.exports=mongoose.model("customers",customSchema);