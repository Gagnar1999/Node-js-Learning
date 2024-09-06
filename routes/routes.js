const express = require("express");
const { userController } = require("../controllers/userController");

//create router object
const router = express.Router()

//routes GET|POST|UPDATE|DELETE

router.get("/test-user", userController);


module.exports = router