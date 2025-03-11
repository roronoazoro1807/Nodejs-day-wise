# Day 10: Building a User Model & Storing Hashed Passwords

## Recap from Day 9:

- We implemented CRUD operations for the `Product` model using Express and Sequelize.

## Importance of Password Hashing:

- **Security is paramount:** Never store passwords in plain text in your database! This is a major security vulnerability.
- **Password Hashing:**  A one-way function that transforms a password into a fixed-size string of characters (the hash).
- **One-way:** It's computationally infeasible to reverse the hashing process to get back the original password from the hash.
- **Salting:**  Adding a random string (the salt) to the password before hashing. This makes rainbow table attacks (precomputed hashes) less effective.
- **bcrypt:** A popular and strong password hashing library. It's slow by design (adjustable work factor) to make brute-force attacks more time-consuming.

## Today's Objectives:

1. **Install `bcrypt`:**  We'll install the `bcrypt` library for password hashing.
2. **Create a `User.js` Sequelize Model:** Define a User model with attributes like `username`, `email`, and `password`.
3. **Implement Password Hashing using `bcrypt`:**
    - **Hash the password before saving a new user to the database.** We'll use Sequelize hooks for this.
4. **Create an API endpoint to register new users (POST /users).**
5. **Test user registration and password hashing.** Verify that the hashed password is stored in the database (and *not* the plain text password).

## Next Steps for Day 11:

- We will start implementing JWT (JSON Web Tokens) authentication to handle user login and authorization.