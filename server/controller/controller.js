const { request } = require('express');
var Userdb = require('../model/model');

//create and save nw user

exports.create = (request,res) => {
    //validate req
    if(!request.body) {
        res.status(400).send({ message: "content can not be empty" })
    }
}
//new user
const user = new Userdb({
    name:request.body.name, 
    email:request.body.email,
    gender:request.body.gender,
    status:request.body.status
})
//save user in the database
user.save(user)
    .then(data=>{res.send(data)})
    .catch(err=>{
        res.status(500).send({
            message:err.message||"some error occur"
        })
    })
//retrive and return all users/retrive and return a single user

exports.find = (req, res) => {
}

// update a new identified user by user id

exports.update = (req, res) => {

}

//Delete a user with specified user id in the request
exports.delete = (req, res) => {

}
 