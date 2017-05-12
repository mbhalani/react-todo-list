
const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.use(express.static('./dist'));

app.use('/', (req, res) => {
  res.sendFile(path.resolve('client/index.html'));
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Express-Server listening on port: ${port}`);
});
