const express = require('express');
const router = express.Router();
const { login, signup, fetchData } = require('../controller/userController');
const requireAuth = require("../middleware/userAuth");

router.post("/login", login);
router.post("/signup", signup);

router.use(requireAuth); // Apply requireAuth middleware to all routes below this line
router.get("/fetchData", fetchData);

module.exports = router;
