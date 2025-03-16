// User.js
import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import bcrypt from "bcrypt";
import Role from "./models/Role.js"; // Import the Role model

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      // Foreign key to the Role model
      type: DataTypes.INTEGER,
      defaultValue: 1, // Default to 'user' role (assuming 'user' role has ID 1)
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(user.password, saltRounds);
          user.password = hashedPassword;
        }
      },
    },
  }
);

User.prototype.comparePassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};

// Define the association between User and Role (One-to-Many)
User.belongsTo(Role, { foreignKey: "roleId", as: "role" });
Role.hasMany(User, { foreignKey: "roleId", as: "users" });

export default User;
