const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        const userExists = users.hasOwnProperty(email);

        if (userExists) 
        res.send("user exists")

        users[email] = { name, password };
    } catch (e) {

    }

})

module.exports = router;