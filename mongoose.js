const  mongoose  = require('mongoose');

 

 const main=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductsSch=new mongoose.Schema({
        name:String,
        price:Number,
        brand:String
    });
    const Productmodel= mongoose.model('products',ProductsSch);
    let data=new Productmodel({name:"m8",price:60000,brand:"nokia"});
    let result=await data.save();
    console.log(result);
 }
 main()