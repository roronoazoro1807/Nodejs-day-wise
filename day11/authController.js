// authController.js
import User from "./User.js";
import jwt from "jsonwebtoken";
import jwtConfig from "./jwtConfig.js"; // Optional - JWT config

// --- User Login (POST /login) ---
export const loginUser = async (req, res) => {
  const { username, password } = req.body; // Get username and password from request body

  try {
    // 1. Find the user by username
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" }); // 401 Unauthorized - User not found
    }

    // 2. Compare passwords using the User model's comparePassword method
    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" }); // 401 Unauthorized - Password doesn't match
    }

    // 3. Generate JWT
    const payload = { userId: user.id, username: user.username }; // Payload to include in the JWT (minimize sensitive data)
    const secretKey = jwtConfig.secretKey; // Use secret key from config (or directly define here)
    const expiresIn = "1h"; // Token expiration time (e.g., '1h', '15m', '1d')

    const token = jwt.sign(payload, secretKey, { expiresIn }); // Sign the JWT

    // 4. Send JWT in response
    res.status(200).json({ message: "Login successful", token }); // 200 OK - Send back the JWT
    console.log("JWT Token generated:", token); // Log the token for testing (remove in production)
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Login failed" }); // 500 Internal Server Error for login errors
  }
};
