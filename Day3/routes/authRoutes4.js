const express = require("express");
const router = express.Router();
const {
    validateName,
    validateEmail,
    validatePassword,
  } = require("../utils/validators");

router.post("/signup", (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        const userExists = users.hasOwnProperty(email);

        if (userExists) {
            res.send("user exists")
        }

        if (!validateName(name)) {
            res.send("Invalid name")
        }

        if (!validateEmail(email)) {
            res.send("Invalid email")
        }

        users[email] = { name, password };
    } catch (e) {

    }

})

module.exports = router;