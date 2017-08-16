const Video = require('../../models/video');

function Delete(id, callback) {
  Video.remove({
    _id: id
  }, (error, result) => {
    if (error)
      return callback(error);
    callback(null, result);
  })
};

module.exports = Delete;
