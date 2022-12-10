const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
    } catch (e) {

    }

})

module.exports = router;