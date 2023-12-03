const { Schema, model } = require('mongoose');

const StationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    closed: {
        type: Boolean,
        required: true,
    }
});

const Station = model('station', StationSchema);

module.exports = Station