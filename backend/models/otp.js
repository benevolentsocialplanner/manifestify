const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
}, {timestamps: true});

otpSchema.pre("save", async function (next) {
  console.log("New document saved to the database");
  next();
});

module.exports = mongoose.model("OTP", otpSchema)