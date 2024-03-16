const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/database");
const Role = require("./role.model");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role,
        key: "role_id",
      },
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

// Define association
User.belongsTo(Role, { foreignKey: "role_id" });

module.exports = User;
