// productController.js
import Product from "./Product.js"; // Import the Product model

// --- CRUD Operations ---

// 1. Create Product (POST /products)
export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Failed to create product" });
  }
};

// 2. Get All Products (GET /products)
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// 3. Get Product by ID (GET /products/:id)
export const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findByPk(productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

// 4. Update Product (PUT /products/:id)
export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const [updatedRows] = await Product.update(req.body, {
      where: { id: productId },
    });

    if (updatedRows > 0) {
      const updatedProduct = await Product.findByPk(productId);
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ error: "Product not found or not updated" });
    }
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Failed to update product" });
  }
};

// 5. Delete Product (DELETE /products/:id)
export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedRows = await Product.destroy({
      where: { id: productId },
    });

    if (deletedRows > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Product not found or not deleted" });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
};
