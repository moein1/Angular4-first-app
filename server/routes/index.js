const Video = require('../modules/video/routes');

//Second approch without modules
// function GetVideo(req, res) {
//   res.send('test second approch for routing');
// };

module.exports = function (app) {
//Second approch
 // app.get('/api/video', GetVideo);
 //third approach for deviding application as much 
 //as I cans an using a module that contains
 //a lot of modules
  Video(app);
};
