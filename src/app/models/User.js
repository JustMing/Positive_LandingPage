const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User  = new Schema({
    name: String,
    phone: String,
    email: String,
    approved: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', User);