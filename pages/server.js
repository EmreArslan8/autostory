const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/proxy', async (req, res) => {
  const url = req.query.url;
  try {
    const response = await fetch(url);
    const data = await response.buffer();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3001, () => {
  console.log('Proxy server is running on http://localhost:3001');
});
