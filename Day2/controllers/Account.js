const User = require('../models').users;
const Account = require('../models').Accounts

module.exports={
    add(req, res) {
        return Account
          .create({
            Currency: req.body.Currency,
            Balance: req.body.Balance,
            user_id: req.body.user_id,
            
          })
          .then((Account) => res.status(201).send(Account))
          .catch((error) => res.status(400).send(error));
      }
}