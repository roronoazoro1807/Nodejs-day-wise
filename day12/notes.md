# Day 12: Role-Based Access Control (RBAC) (ES6 Modules)

## Recap from Day 11:

- We implemented JWT authentication for user login and token generation.

## What is Role-Based Access Control (RBAC)?

- **RBAC is an access control mechanism that assigns permissions to users based on their roles within an organization or system.**
- Instead of assigning permissions directly to individual users, permissions are associated with roles, and users are then assigned to those roles.
- **Benefits of RBAC:**
    - **Simplified Management:** Easier to manage permissions as you only need to manage roles and user assignments to roles.
    - **Improved Security:** Reduces the risk of assigning incorrect permissions to users.
    - **Scalability:** Makes it easier to scale permissions as the application grows.

## Implementing RBAC:

1. **Define Roles:** Identify the different roles in your application (e.g., 'admin', 'user', 'editor').
2. **Assign Permissions to Roles:** Determine which actions or resources each role can access.
3. **Assign Users to Roles:** Associate users with one or more roles.
4. **Enforce Access Control:** In your application logic, check the user's role before allowing them to perform certain actions.

## Today's Objectives:

1. **Create a `Role` Sequelize Model.**
2. **Modify the `User` model to establish a relationship with the `Role` model (One-to-Many or Many-to-Many, we'll start with One-to-Many for simplicity).**
3. **Update the user registration process to assign a default role to new users (e.g., 'user').**
4. **Create an `authMiddleware` to verify the JWT and check if the user has the required role to access a protected route.**
5. **Implement a protected route that only users with a specific role (e.g., 'admin') can access.**
6. **Modify the login process to include the user's role in the JWT payload (optional but useful).**

## Next Steps for Day 13:

- We will start building our User Authentication System project, which will involve full CRUD operations for users, JWT authentication, and RBAC using PostgreSQL and Sequelize.