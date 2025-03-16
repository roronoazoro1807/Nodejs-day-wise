// authController.js
import User from "./User.js";
import jwt from "jsonwebtoken";
import jwtConfig from "../jwtConfig.js"; // Adjust path if needed

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: { username },
      include: [{ model: Role, as: "role" }], // Eagerly load the user's role
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const payload = {
      userId: user.id,
      username: user.username,
      role: user.role.name, // Include the user's role name in the payload
    };
    const secretKey = jwtConfig.secretKey;
    const expiresIn = "1h";

    const token = jwt.sign(payload, secretKey, { expiresIn });

    res.status(200).json({ message: "Login successful", token });
    console.log("JWT Token generated:", token);
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Login failed" });
  }
};
