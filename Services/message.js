const MessageRepository = require("../Repositories/MessageRepository");

module.exports = {
  findAll: callback => {
    MessageRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    MessageRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },

  add: (message, callback) => {
    MessageRepository.addObj(message, (err, data) => {
      callback(null);
    })
  },

  findOneAndUpdate: (id, message, callback) => {
    MessageRepository.updObj(id, message, (err, data) => {
        callback(err);
      })
  },
  
  findOneAndDelete: (id, callback) => {
    MessageRepository.delObj(id, (err, data) => {
        callback(err);
    })
  },
  findAllUsers: (id, callback) => {
      
  }
};
