// models/Role.js
import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Role = sequelize.define("Role", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Role;
