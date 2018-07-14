const UserRepository = require("../Repositories/UserRepository");

module.exports = {
  findAll: callback => {
    UserRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    UserRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },

  add: (user, callback) => {
    UserRepository.addObj(user, (err, data) => {
      callback(null);
    })
  },

  findOneAndUpdate: (id, user, callback) => {
      UserRepository.updObj(id, user, (err, data) => {
        callback(err);
      })
  },

  findOneAndDelete: (id, callback) => {
    UserRepository.delObj(id, (err, data) => {
        callback(err);
    })
  },

  findReceiversUsers: (array, callback) => {
    UserRepository.getReceiversUsers(array, (err, dataUs) => {
      callback(err, dataUs);
    })
  }
};
