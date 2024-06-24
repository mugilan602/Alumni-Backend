const express = require('express');
const router = express.Router();
const { login, signup, fetchData,updateImageUrl } = require('../controller/userController');
const {createJob, apply,getJobs,getJobById}=require("../controller/jobController");
const requireAuth = require("../middleware/userAuth");

router.post("/login", login);
router.post("/signup", signup);


router.post("/apply/:jobId",apply)
router.get("/jobs",getJobs)
router.get("/job/:jobId",getJobById)
router.patch("/:userId",updateImageUrl);
router.use(requireAuth); // Apply requireAuth middleware to all routes below this line
router.get("/fetchData", fetchData);



//Job Routes
router.post("/job", createJob);


module.exports = router;
