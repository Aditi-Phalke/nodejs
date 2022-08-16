//const sequelize  = require('../models/index.js');
const Department=require('../models').Department;
require('../models/index.js');

module.exports={ async addDepartment(req,res){
    
    const newUser=await Department.create({
       dtName: req.body.dtName,
       
        user_Id: req.body.user_Id
       

   })
   res.send(newUser);
},
async counts(req, res){
    let counts = await Department.findAll({
       attributes: ['user_Id', [sequelize.fn('count', sequelize.col('dtName')), 'count']],
       group: ['Department.user_Id'],
       raw: true,
    });
    res.send(counts);
    
}
}
