const express=require("express");
const app=express();
require("./db/config");
const customers=require("./db/customer");
const cors=require("cors");

app.use(express.json());
app.use(cors());
app.post("/detail",async(req,res)=>{
    let data=new customers(req.body);
    let result=await data.save();
    res.send(result);
})


app.listen(8000,()=>{
    console.log("Listen")
})