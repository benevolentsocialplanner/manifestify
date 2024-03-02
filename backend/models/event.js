const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const EventSchema = new Schema({
    event_id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 200,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    active: {
      type: Boolean,
      default: true
  }
}, {timestamps: true})
const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
