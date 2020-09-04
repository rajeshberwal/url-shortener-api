const mongoose = require("mongoose");
const config = require("config");
require('dotenv').config({path: __dirname + '/.env'});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Mongodb Connected.... 🔥');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;