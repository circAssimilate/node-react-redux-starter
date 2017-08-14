const express = require('express');
const path = require('path');
const router = express.Router();

router.use('/public', express.static(path.join(__dirname, '/public/')));

router.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html')
});

module.exports = router;
