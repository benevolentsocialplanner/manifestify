const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const { getEvents, createEvent } = require("../controllers/eventController");

router.get("/events", jsonParser, getEvents);
router.post("/events/create", jsonParser, createEvent);

module.exports = router;
