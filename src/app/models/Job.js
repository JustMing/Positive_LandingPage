const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Job = new Schema({
    title: String,
    place: String,
    jobType: String,
    salary: String,
    description: String,
    request: String,
    benefits: String,
    applyDate: Date
});

module.exports = mongoose.model('Job', Job);