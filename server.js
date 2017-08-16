const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./server/routes/api');
const router = require('./server/routes');
const mongoose = require('mongoose');
const config = require('./server/config');

//Connecting to mongoDb in mlab
mongoose.connect(config.db, (error) => {
  if (error)
    console.log('some error occured while connectinng to dsabase ', error);
  console.log('cnnecting to database correctly');
});

const app = express();
//it parse the body text as json
app.use(bodyParser.json());
//it parse test as urlencoded data
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//this is second approch for routing
router(app);
//Sepcifc the static files
app.use(express.static(path.join(__dirname, 'dist')));

//this routes is for the all the api routes
//app.use('/api', api);

//this is the default route but this
//should be the last route after all the api routes
//by default the index.html inside the static forlder will be accessed in app.get('*')
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})
const port = 5000;
app.listen(port, () => {
  console.log('We are listening on port ' + port);
})
