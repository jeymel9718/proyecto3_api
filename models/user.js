const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  lastName: String,
  password: String,
  email: String
});

module.exports = Mongoose.model("User", UserSchema);