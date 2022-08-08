const express = require('express');
 require('../config');
const users=require('./models').users;
const Account=require('./models').Account;



const app=express();
app.use(express.json());
 app.post("/create",async (req,res)=>{
    let data=new users(req.body);
    let result=await data.save();
    console.log(req.body);
    res.send(result);
   
 });

 app.post("/Account/create",async (req,res)=>{
    let data=new Account(req.body);
    let result=await data.save();
    console.log(req.body);
    res.send(result);

 });

 app.get('/users/:id', async (req, res)=>{
   let data=await users.findAll({
      
      include: {
          model: Account,
          as: 'Account',
          where: {
            user_Id: req.params.id
          },
          required: true,
  
      }
  }); 
  res.send(data);
 });

 app.get('/list', async (req,res)=>{
   let data=await users.findAll({
      order: [['createdAt','DESC']]
   });
   res.send(data);
 });
 app.delete("/delete/:id",async (req,res)=>{
   console.log(req.params);
   let data=await users.destroy({
      where:{
         id: req.params.id
      },
      cascade: true,
      include: [{
         model: Account,
         as: 'Account',
  
         cascade: true,
      }],
   });
return data;
 });


app.listen(5000);