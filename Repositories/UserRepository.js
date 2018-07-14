const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const scheme = require("../Models/scheme");
const mongoose = require("mongoose");

function UserRepository() {
  Repository.prototype.constructor.call(this);
  this.model = scheme.User;
}

UserRepository.prototype = new Repository();

UserRepository.prototype.addObj = function(user, callback) {    // Adding new user
  var model = this.model;
  model.create({name: user.name, email: user.email});
}

UserRepository.prototype.updObj = function(id, user, callback) {
  var model = this.model;
  var query = model.findOneAndUpdate({_id: id}, {$set: {name: user.name, email: user.email}});
  query.exec(callback);
}
UserRepository.prototype.getReceiversUsers = function(array, callback) {
  var moongoseObject = [];

  for(let id of array) {
    moongoseObject.push(new mongoose.Types.ObjectId(id));
  }

  var model = this.model;
  var query = model.find({_id: {$in: moongoseObject}});
  query.exec(callback);
}
module.exports = new UserRepository();
