const express = require('express');

const router = express.Router();

router.get('/video', (req, res) => {
  res.json('this is just test');
});
module.exports = router;
