var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reservationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
    },
    time: {
      type: String,
      required: true,
    },
    table: {
      type: Number,
    },
    phone: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

var Reservations = mongoose.model('Reservation', reservationSchema);

module.exports = Reservations;
