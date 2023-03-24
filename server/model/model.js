const mongoose = require('mongoose');
var Data = mongoose.schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String, require: true,
        unique: true
    },
    gender: String,
    status: String
})
const Userdb = mongoose.model('userdb', Data)

module.exports = Userdb;