// Product.js
import { DataTypes } from "sequelize";
import sequelize from "./db.js"; // Import the Sequelize connection

const Product = sequelize.define("Product", {
  // Define the model named 'Product' (table name will be 'Products' - Sequelize pluralizes by default)
  name: {
    type: DataTypes.STRING, // Data type for the 'name' column is STRING (VARCHAR in SQL)
    allowNull: false, // 'name' column cannot be null
  },
  description: {
    type: DataTypes.TEXT, // Data type for 'description' column is TEXT
  },
  price: {
    type: DataTypes.DECIMAL(10, 2), // Data type for 'price' column is DECIMAL with 10 digits total and 2 decimal places
  },
  // Sequelize automatically adds `id`, `createdAt`, and `updatedAt` columns
});

export default Product;
