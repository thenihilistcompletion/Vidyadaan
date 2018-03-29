const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));

});
let port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log('Listening on 5000');
  
})