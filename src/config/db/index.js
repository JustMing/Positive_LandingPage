const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/positive_dashboard');
        console.log('connect successful');
    } catch(error) {
        console.log('connect failed');
    }
};

module.exports = { connect };