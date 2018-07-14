const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const scheme = require("../Models/scheme");

function MessageRepository() {
  Repository.prototype.constructor.call(this);
  this.model = scheme.Message;
}

MessageRepository.prototype = new Repository();

MessageRepository.prototype.addObj = function(message, callback) {    // Adding new user
  var model = this.model;
  model.create({senderId: message.senderId, bodyMes: message.bodyMes, receiverId: message.receiverId});
}

MessageRepository.prototype.updObj = function(id, message, callback) {
  var model = this.model;
  var query = model.findOneAndUpdate({_id: id}, {$set: {senderId: message.senderId, bodyMes: message.bodyMes, receiverId: message.receiverId}});
  query.exec(callback);
}

MessageRepository.prototype.getMesOfSenderId = function(id, callback) {
    var model = this.model;
    var query = model.aggregate([{$match: {senderId: id}},{$group: {_id: '$receiverId'}}, {$limit: 5}]);
    query.exec(callback);
}

module.exports = new MessageRepository();