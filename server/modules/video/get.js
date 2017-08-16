const Video = require('../../models/video');

function Get(callback) {
  Video.find({}, (error, result) => {
    if (error)
      return callback(error);
    callback(null, result);
  })
}

function GetById(id, callback) {
  Video.find({
    _id: id
  }).exec((error, result) => {
    if (error)
      return callback(error);
    callback(null, result);
  });
};

module.exports = {
  Get: Get,
  GetById: GetById
}
