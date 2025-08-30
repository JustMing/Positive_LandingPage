const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Job = new Schema({
    title: String,
    place: String,
    jobType: String,
    salary: String,
    description: String,
    request: String,
    benefits: String,
    applyDate: Date,
    slug: {type: String, slug: 'title', unique: true}
});

module.exports = mongoose.model('Job', Job);