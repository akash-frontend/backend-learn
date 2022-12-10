// To create express server 
// we need 2 lines

const express = require("express");
const app = express();

// Specify port of our express server 
const PORT = 1337;

// provide callback when successfull run on this port 
// to check our express server is running
// call back is if everything ok till here call this function

app.listen(PORT, () => {
    console.log('App is running at port=', PORT);
  });
