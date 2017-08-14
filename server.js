const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes');

const PORT = process.env.PORT || 8080;

app.use('/', router);

app.listen(PORT, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
