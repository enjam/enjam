const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/customPath', function(req, res) {
	res.send('custom path');
});

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('Node app is running on port', port);
});