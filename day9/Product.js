// Product.js
import { DataTypes } from "sequelize";
import sequelize from "./db.js";

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
});

export default Product;
