const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;
  
   const app =  express();
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Test server
app.get('/', function(req, res){
  console.log("Hello word")
  res.send("Hello World")
});

app.listen(PORT, function () {
   console.error(`Server listening on port ${PORT}`);
});

