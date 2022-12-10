const express = require("express");
const router = express.Router();
const {
    validateName,
    validateEmail,
    validatePassword,
  } = require("../utils/validators");

router.post("/signup", async (req, res) => {
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

        if (!validatePassword(password)) {
            res.send("Invalid password")
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        users[email] = { name, password: hashedPassword };
        
        res.send("Success")
    } catch (e) {
        res.send(e)
    }

})

module.exports = router;