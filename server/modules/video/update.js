const Video = require('../../models/video');

function Update(id, video, callback) {
  Video.findOneAndUpdate({
    _id: id
  }, {
    title: video.title,
    url: video.url,
    description: video.description
  }, {
    new: true
  }, (error, result) => {
    if (error)
      return callback(error);
    callback(null, result);
  });
};

module.exports = Update;
