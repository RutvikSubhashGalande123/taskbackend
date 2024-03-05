const User = require("../models/user.model");

exports.createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateUser = async (userId, userData) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    await user.update(userData);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    await user.destroy();
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
