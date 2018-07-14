function Repository() {}

Repository.prototype.getAll = getAll;
Repository.prototype.getById = getById;
Repository.prototype.delObj = delObj;

function getAll(callback) {
  var model = this.model;
  var query = model.find();
  query.exec(callback);
}

function getById(id, callback) {
  var model = this.model;
  var query = model.find({
    _id: id
  });
  query.exec(callback);
}

function delObj(id, callback) {
  var model = this.model;
  var query = model.findOneAndDelete({_id: id});
  query.exec(callback);
}

module.exports = Repository;
