const { generateToken } = require("../../middleware/auth.middleware");
const userService = require("../service/user.service");

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const token = generateToken(user);
    console.log(token);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedUser = await userService.updateUser(userId, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await userService.getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const deletedUser = await userService.deleteUserById(userId);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
exports.listUsers = async (req, res) => {
  try {
    const users = await userService.listUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Assuming you have a userService module for handling business logic

exports.assignRole = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const isAdmin = userService.checkisAdmin(req.userData);
    const assignrole = req.body.role_name; // Assuming the role is sent as assigning_role in the request body

    console.log("Role assigned is ", assignrole);

    if (isAdmin) {
      await userService.assignRole(userId, assignrole);
      return res.status(200).json({ message: "Role assigned successfully" });
    } else {
      return res.status(403).json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.error("Error assigning role:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
