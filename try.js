const client=require('./database.js');
const express=require('express');
const app=express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.listen(5000, ()=>{
    console.log('server is listining the port 5000');

});
client.connect();


app.post('/users', (req, res)=> {
    //console.log(req,"req");
    try{
        
   
    const user = req.body;

    console.log(user);
    let insertQuery = `insert into users(id, firstname, lastname, gender, ctime) 
                       values(${user.id}, '${user.firstname}', '${user.lastname}','${user.gender}', current_timestamp)`


}catch{(err)
console.log(err);}
client.query(insertQuery, (err, result)=>{
    if(!err){
        res.send('Insertion was successful');
        console.log(result);

    }
    else{ console.log(err.message) }
})
client.end;
})
