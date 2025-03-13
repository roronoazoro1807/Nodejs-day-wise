# Day 11: Implementing JWT Authentication (ES6 Modules)

## Recap from Day 10:

- We built a `User` model and implemented secure password hashing using `bcrypt`.
- We created a user registration API endpoint.

## What is JWT (JSON Web Token) Authentication?

- **JWT is a standard for securely transmitting information between parties as a JSON object.**
- In authentication, JWTs are used to verify the identity of a user after they log in.
- **Stateless Authentication:** JWTs are self-contained and don't require server-side sessions to track user login status.
- **How JWT Authentication works (simplified):**
    1. **User Login:** User submits credentials (username/password).
    2. **Server Verification:** Server verifies credentials against the database.
    3. **JWT Generation:** Upon successful verification, the server creates a JWT and sends it back to the client.
    4. **Subsequent Requests:** Client includes the JWT in the `Authorization` header of subsequent requests.
    5. **JWT Verification:** Server verifies the JWT's signature and authenticity.
    6. **Access Granted:** If the JWT is valid, the server grants access to protected resources.

## Benefits of JWT:

- **Stateless:**  Scalable and easier to manage compared to session-based authentication.
- **Cross-Domain Authorization:** JWTs can be used across different domains.
- **Standardized:** Widely adopted and supported across different platforms and languages.
- **Self-Contained:** JWTs contain all necessary information about the user in the token itself (payload).

## Today's Objectives:

1. **Install `jsonwebtoken`:** Install the `jsonwebtoken` library for JWT handling.
2. **Create a `/login` API endpoint (POST /login).**
3. **Implement User Login Logic:**
    - Validate user credentials (username/email and password).
    - Use `bcrypt.compare()` to compare the provided password with the hashed password from the database.
4. **Generate a JWT upon successful login.**
    - Use `jsonwebtoken.sign()` to create a JWT.
    - Include user ID in the JWT payload.
    - Use a secret key to sign the JWT.
    - Set an expiration time for the JWT.
5. **Send the JWT back to the client in the response.**
6. **Basic understanding of JWT structure and generation.**

## Next Steps for Day 12:

- We will implement Role-Based Access Control (RBAC) to manage user permissions and authorize access to different parts of the application based on user roles.