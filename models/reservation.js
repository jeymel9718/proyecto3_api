const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const ReservationSchema = new Schema({
  checkIn: String,
  checkOut: String,
  roomType: String,
  rooms: String,
  id: String,
  comments: String
});

module.exports = Mongoose.model("Reservation", ReservationSchema);