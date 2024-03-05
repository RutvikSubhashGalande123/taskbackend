const userService = require("../service/user.service");

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
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
