const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
//create user
router.post("/createuser", userController.createUser);
//update user
router.put("/updateuser/:userId", userController.updateUser);
//get user by ID
router.get("/getuser/:userId", userController.getUserById);
//delete user by ID
router.delete("/delete/:userId", userController.deleteUserById);

module.exports = router;
