const  mongoose  = require('mongoose');
const ProductsSch=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String
});
 

 const main=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    
    const Productmodel= mongoose.model('products',ProductsSch);
    let data=new Productmodel({name:"m8",price:60000,brand:"nokia"});
    let result=await data.save();
    console.log(result);
 }
 main()
 
 const updateInDB=async ()=>{
    const Productmodel=mongoose.model('products', ProductsSch);
    let data=await Productmodel.updateMany(
        { name: "m8"},
        {
            $set: {price: 70000}
        }
    )

    console.log(data);
 }
 updateInDB()
 const deleteInDB=async ()=>{
    const Productmodel=mongoose.model('products', ProductsSch);
    let data=await Productmodel.deleteOne(
        {name: "Nokia 1100"});
        console.log(data);
    
    }
deleteInDB()

const findInDB=async ()=>{
    const Productmodel=mongoose.model('products', ProductsSch);
    let data=await Productmodel.find();
        console.log(data);
    
    }
findInDB()

