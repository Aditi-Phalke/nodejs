const {Client}=require('pg');
const client=new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Passw0rd",
    database:"postgres"
})
module.exports=client;