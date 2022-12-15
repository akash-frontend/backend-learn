const express = require("express");
const routes = require("./routes/authRoutes");
const app = express();
// const process = require('process');


// accept json
app.use(express.json());
// accept body
app.use(express.urlencoded({ extended: true }));
// use the html
app.use(express.static("public"))

  
app.use("/api/v1", routes);

const PORT = 1337;


// process.on('uncaughtException', function (error) {
//   console.log(error);
// });

app.listen(PORT, () => {
    console.log('App is running at port=', PORT);
  });