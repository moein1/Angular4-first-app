const Video = require('../index');

function Get(req, res) {
  Video.Get.Get((error, video) => {
    if (error)
      return res.status(500).end(error);
    res.send(video);
  })
};

function GetById(req, res) {
  Video.Get.GetById(req.params.id, (error, video) => {
    if (error)
      return res.status(500).end(error);
    res.send(video);
  });
}

function Add(req, res) {
  Video.Add(req.body, (error, result) => {
    if (error)
      return res.status(500).end(error);
    res.send(result);
  })
}

function Update(req, res) {
  Video.Update(req.params.id, req.body, (error, result) => {
    if (error)
      return res.status(500).end(error);
    res.send(result);
  });
};

function Delete(req, res) {
  Video.Delete(req.params.id, (error, result) => {
    if (error)
      return res.status(500).end(error);
    res.send(result);
  })
}

module.exports = function (app) {
  app.get('/api/video', Get);
  app.get('/api/video/:id', GetById);
  app.post('/api/video', Add);
  app.put('/api/video/:id', Update);
  app.delete('/api/video/:id', Delete);
}
