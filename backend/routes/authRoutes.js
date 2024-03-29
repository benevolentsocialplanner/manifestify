const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const authController = require("../controllers/authController");

router.post("/register", jsonParser, authController.register);
router.post("/login", jsonParser, authController.login);
router.get("/logout", jsonParser, authController.protect, authController.logout);
router.post("/otp", jsonParser, authController.otp);
router.post("/otp/verify", jsonParser, authController.verify);

module.exports = router;
