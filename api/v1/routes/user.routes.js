const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const { authenticate } = require("../../middleware/auth.middleware");

// create user
router.post("/createuser", userController.createUser);
// update user
router.put("/updateuser/:userId", userController.updateUser);
// get user by ID
router.get("/getuser/:userId", userController.getUserById);
// delete user by ID
router.delete("/delete/:userId", userController.deleteUserById);
//  list of users
router.get("/listuser", [authenticate], userController.listUsers);
// // asign role for user
router.post(
  "/assignrole/:user_id",
  [authenticate],
  userController.assignRole
);

module.exports = router;
