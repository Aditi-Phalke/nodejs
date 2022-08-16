const user = require('../models').users
//require('../models/index.js')
require('../config')
async function add (req, res) {
  try {
    let newUser = await user.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      gender: req.body.gender
    })
    console.log(newUser)
    res.send(newUser)
  } catch (e) {
    console.log(e)
    res.send(e)
  }
}
async function findUser (req, res) {
  try {
    let data = await users.findAll({
      include: {
        model: Account,
        as: 'Account',
        where: {
          user_Id: req.params.id
        },
        required: true
      }
    })
    res.send(data)
  } catch (e) {
    console.log(e)
    res.send(e)
  }
}

async function allUsers (req, res) {
  let data = await user.findAll({
    order: [['createdAt', 'DESC']]
  })
  console.log(data, 'data')
  res.send(data)
}

//  deleteUser(async(req,res)=>{
//     try{
//        const result = await sequelize.transaction(async (t) => {

//     console.log(req.params);
//     let data=await users.destroy({
//        where:{
//           id: req.params.id
//        },
//        cascade: true,
//        include: [{
//           model: Account,
//           as: 'Account',

//           cascade: true,
//        }],
//     }, { transaction: t });
//     return data;
//  })
//  }catch(error){}
// })
module.exports = {
  add,
  findUser,
  // deleteUser,
  allUsers
}
