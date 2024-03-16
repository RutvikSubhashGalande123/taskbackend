const Role = require("../models/role.model");
const User = require("../models/user.model");

exports.createUser = async (userData) => {
  try {
    const roleData = { role_name: userData.role_name };

    const role = await Role.create(roleData);
    const newUser = { ...userData, role_id: role.role_id };

    const user = await User.create(newUser);

    return user;
  } catch (error) {
    console.log(error);
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
exports.listUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.assignRole = async (userId, role_name) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const role = await Role.findByPk(user.role_id);
    console.log(role);
    const new_role = { ...role, role_name: role_name };
    role.update(new_role);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.checkisAdmin = async (userData) => {
  try {
    const user = await User.findByPk(userData.user_id);
    const role = await Role.findByPk(user.role_id);

    if (user) {
      if (role.role_name === "admin") {
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error("User not found");
    }

    return false;
  } catch (error) {
    throw new Error(error.message);
  }
};
