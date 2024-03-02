const Event = require('../models/event');
const catchAsync = require ('../utils/catchAsync')

exports.createEvent = catchAsync(async (req, res, next) => {
  try {
    const { name, description, date, location } = req.body;
    console.log('Creating event:', name, description, date, location)
    const event = new Event({
      name,
      description,
      date,
      location
    });

    await event.save();

    res.status(201).json({ event });
  } catch (error) {
    console.error('Error creating event:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

exports.getEvents = catchAsync(async (req, res, next) => {
  try {
    const events = await Event.find();
    res.status(200).json({ events });
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
})