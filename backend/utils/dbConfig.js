const mongoose = require('mongoose');

const dbc = async () => {
  try {
    console.log("Connecting to the database");
    await mongoose.connect(process.env.DATABASE, {});
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
  }
};

module.exports = dbc;
