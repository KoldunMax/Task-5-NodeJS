const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String
});

const messageSchema = mongoose.Schema({
  senderId: String,
  bodyMes: String,
  receiverId: String
});

const User = mongoose.model("User", userSchema);
const Message = mongoose.model("Message", messageSchema);

module.exports.User = User;
module.exports.Message = Message;