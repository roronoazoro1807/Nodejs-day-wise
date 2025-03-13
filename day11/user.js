// User.js
import { DataTypes } from "sequelize";
import sequelize from "./db.js";
import bcrypt from "bcrypt";

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
    instanceMethods: {
      // Not recommended in Sequelize v6+, using prototype instead (see below)
      // comparePassword: async function(plainPassword) { // Instance method to compare passwords - older way
      //   return await bcrypt.compare(plainPassword, this.password);
      // }
    },
  }
);

// Instance method to compare passwords (recommended way in Sequelize v6+)
User.prototype.comparePassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};

export default User;
