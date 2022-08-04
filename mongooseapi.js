const express = require('express');
 require('./config');
const Product=require('./products');
 
const app=express();
app.use(express.json());
 app.post("/create",async (req,res)=>{
    let data=new Product(req.body);
    let result=await data.save();
    console.log(req.body);
    res.send(result);
 });

 app.get("/list",async (req,res)=>{
   let data=await Product.find();
   res.send(data);
 });

 app.delete("/delete/:_id",async (req,res)=>{
   console.log(req.params);
   let data=await Product.deleteOne(req.params);
   res.send(data);
 });

 app.put("/update/:_id",async (req,res)=>{
   let data=await Product.updateOne(
      req.params,
      {
         $set: req.body
      }
   );
      res.send(data);
      console.log(data);
 });

 app.get("/search/:key",async (req,res)=>{
   console.log(req.params.key);
   let data = await Product.find(
      {
         "$or":[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}}

         ]
      }
   );
   res.send(data);

   
 })
 app.listen(5000);