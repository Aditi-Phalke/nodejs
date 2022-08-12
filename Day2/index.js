const express = require('express');
const { sequelize } = require('./models');
 require('../config');
const users=require('./models').users;
const Account=require('./models').Account;
const Department=require('./models').Department;

const app=express();

app.use((req, res, next)=>{
   console.log('Time:',Date.now());
   console.log('Request Type:',req.method);
   console.log('API Endpoint:',req.originalUrl);

   next();
})
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

 app.post("/Department/create",async (req,res)=>{
   let data=new Department(req.body);
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
   try{
      const result = await sequelize.transaction(async (t) => {

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
   }, { transaction: t });
   return data;
})
}catch(error){}
});

 /*app.get('/Department/count', async (req,res)=>{
 Department.connect;
 let data=await Department.query(`SELECT count("dtName") AS "count" FROM "Department" AS "Department" GROUP BY "Department"."dtName" `);
 console.log(data);
 res.send(data);
 });
Department.end;*/

app.get('/Department/count',async (req, res)=>{
let counts = await Department.findAll({
   attributes: ['user_Id', [sequelize.fn('count', sequelize.col('dtName')), 'count']],
   group: ['Department.user_Id'],
   raw: true,
});
res.send(counts);

})



app.listen(5000);