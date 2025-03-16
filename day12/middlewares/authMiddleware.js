// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";
import jwtConfig from "../jwtConfig.js";

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Assuming "Bearer <token>" format

    jwt.verify(token, jwtConfig.secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // 403 Forbidden - Invalid token
      }

      req.user = user; // Attach the user information from the token to the request object
      next(); // Proceed to the next middleware or route handler
    });
  } else {
    res.sendStatus(401); // 401 Unauthorized - No token provided
  }
};

export const authorizeRole = (roles) => {
  return (req, res, next) => {
    if (req.user && roles.includes(req.user.role)) {
      next(); // User has the required role, proceed
    } else {
      res.sendStatus(403); // 403 Forbidden - User does not have the required role
    }
  };
};
