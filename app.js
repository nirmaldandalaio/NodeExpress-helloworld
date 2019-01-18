const express = require('express');
const app = express();
const path =  require('path');

//define a simple route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.use('/scripts', express.static(__dirname + '/src/scripts'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});