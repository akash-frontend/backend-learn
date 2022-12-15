const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const createDB = require("../config/db");
const User = require("../models/userModels");

const {
    validateName,
    validateEmail,
    validatePassword,
  } = require("../utils/validators");


  let users = {
    
}

// createDB.sync() to connect database
createDB.sync().then(() => {
    console.log("DB is running");
  });
  

router.get("/", (req, res) => {
    res.status(200).send("Server is working well");
  }); 

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        const userExists = await User.findOne({
            where: {
              email
            }
          });
      
        if (userExists) {
            return res.status(403).send("User already exists");
        }

        if (!validateName(name)) {
            return res.status(400).send(
          "Invalid user name: name must be longer than two characters and must not include any numbers or special characters"
        );
        }

        if (!validateEmail(email)) {
            return res.status(400).send("Invalid email");
        }

        if (!validatePassword(password)) {
            return res.status(400).send(
          "Invalid password: password must be at least 8 characters long and must include atlest one - one uppercase letter, one lowercase letter, one digit, one special character"
        );
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const saveToDB = {
            name, email, password: hashedPassword
          }
         const createdUser = await User.create(saveToDB)
              
        return res.status(201).send(createdUser)
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }

})

router.post("/signin", async (req, res) => {
    try{
        const { email, password } = req.body;
        const userExists = users.hasOwnProperty(email);

        if (email.length === 0) {
            return res.status(400).send("Please enter your email");
          }
          if (password.length === 0) {
            return res.status(400).send("Please enter your password");
          }
      
          if (!userExists) {
            return res.status(404).send("User not found");
          }

        const passwordMatch = await bcrypt.compare(password,
            users[email].password);

        if(!passwordMatch){
            return res.status(400).send("Incorrect password");
        }

        return res.status(200).send("Logged in successfully!");
    } catch(err) {
        console.log(err);
        return res.status(500).send(err.message);    
    }
})

module.exports = router;