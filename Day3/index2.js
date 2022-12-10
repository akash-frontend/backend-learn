const express = require("express");
const app = express();


// These are prebuilt functions made by express to help you out

// accept json
app.use(express.json());
// accept body
app.use(express.urlencoded({ extended: true }));
// use the html
app.use(express.static("public"))

const PORT = 1337;

app.listen(PORT, () => {
    console.log('App is running at port=', PORT);
  });