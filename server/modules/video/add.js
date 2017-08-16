const Video = require('../../models/video');


function Add(video, callback) {
  const newVideo = new Video();
  newVideo.title = video.title;
  newVideo.url = video.url;
  newVideo.description = video.description;
  newVideo.save((error, result) => {
    if (error)
      return callback(error);
    callback(null, result);
  })
};

module.exports = Add;
