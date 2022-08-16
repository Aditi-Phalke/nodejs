const Account = require('../models').Accounts
//require('../models/index.js')
require('../config')
async function addAccount (req, res) {
  try {
    let newAccount = await Account.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      gender: req.body.gender
    })
    console.log(newAccount)
    res.send(newAccount)
  } catch (e) {
    console.log(e)
    res.send(e)
  }
}
module.exports = {
  addAccount
}
