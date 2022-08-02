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

app.get('/users/:uid', (req, res)=>{
    client.query(`select * from users where uid=${req.params.uid}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
app.post('/users', (req, res)=> {
    //console.log(req,"req");
    const user = req.body;

    console.log(user);
    let insertQuery = `insert into users(uid, uname, email) 
                       values(${user.uid}, '${user.uname}', '${user.email}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful');
            console.log(result);

        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/users/:uid', (req, res)=> {
    let user = req.body;
    let updateQuery = `update users set uname = '${user.uname}',
                       email = '${user.email}'
                       where uid = ${user.uid}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')

        }
        else{ console.log(err.message) }
    })
    client.end;
})
app.delete('/users/:uid', (req, res)=> {
    let insertQuery = 'delete from users where uid=' + req.params.uid

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})