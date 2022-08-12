const users = require('../models').users;
const Account = require('../models').Account;
module.exports={
    add(req, res) {
        return users
          .create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
          })
          .then((users) => res.status(201).send(users))
          .catch((error) => res.status(400).send(error));
      }
}