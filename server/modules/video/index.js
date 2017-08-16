const Get = require('./get');
const Add = require('./add');
const Update = require('./update');
const Delete = require('./delete');

function Video() {};
Video.prototype.Get = Get;
Video.prototype.Add = Add;
Video.prototype.Update = Update;
Video.prototype.Delete = Delete;

module.exports = new Video();
