const mongoose = require('mongoose');
require('dotenv').config();

async function connect() {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('connect successful');
    } catch(error) {
        console.log('connect failed');
    }
};

module.exports = { connect };