const client=require('./database.js');
const express=require('express');
const app=express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.listen(5000, ()=>{
    console.log('server is listining the port 5000');

});
client.connect();
app.get('/users', (req,res)=>{
    client.query("select * from users",(err,result)=>{
        if(!err){
            res.send(result.rows);
        }else{
            res.send(err.message);
        }
});
client.end;
})


app.post('/users', (req, res)=> {
    //console.log(req,"req");
    const user = req.body;

    console.log(user);
    let insertQuery = `insert into users(id, firstname, lastname, gender, ctime) 
                       values(${user.id}, '${user.firstname}', '${user.lastname}','${user.gender}', current_timestamp)`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful');
            console.log(result);

        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/users', (req, res)=> {
    //console.log(req,"req");
    //
    const user = req.body;
    console.log(user);

    let insertQuery = `insert into users(id, firstname, lastname, gender, ctime) 
                       values(${user.id}, '${user.firstname}', '${user.lastname}','${user.gender}', current_timestamp)`
    
    //if(!firstname && !lastname && !gender){
        client.query(insertQuery, (err, result)=>{
            if(!err && !firstname && !lastname && !gender){
                res.send('Insertion was successful');
                console.log(result);
    
            }
            else{ console.log(err.message) }
        })
   //}
    //else{
        //console.log("Please Enter the all fields");
    //}
    
    client.end;
})
