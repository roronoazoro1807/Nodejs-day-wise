# Day 9: Connecting Express with PostgreSQL (CRUD Operations)

## Recap from Day 8:

- We set up PostgreSQL and Sequelize.
- We created a `db.js` to handle database connection.
- We defined a `Product.js` Sequelize Model representing the 'Products' table.

## What are CRUD Operations?

- **CRUD** stands for **C**reate, **R**ead, **U**pdate, and **D**elete.
- These are the four basic operations that are performed on data in persistent storage (like a database).
- Most applications revolve around performing these operations on different data entities.

## CRUD Operations with Sequelize:

- **Create (POST):**
    - Sequelize method: `Model.create(object)`
    - Inserts a new row into the table based on the provided object (attributes).
- **Read (GET):**
    - **Read All:** Sequelize method: `Model.findAll()`
    - Retrieves all rows from the table.
    - **Read One (by ID):** Sequelize method: `Model.findByPk(id)`
    - Retrieves a single row from the table based on its primary key (usually `id`).
- **Update (PUT/PATCH):**
    - Sequelize method: `Model.update(values, { where: { conditions } })`
    - Updates rows in the table that match the `where` conditions with the new `values`.
- **Delete (DELETE):**
    - Sequelize method: `Model.destroy({ where: { conditions } })`
    - Deletes rows from the table that match the `where` conditions.

## Today's Objectives:

1. **Create API endpoints in Express for each CRUD operation for the `Product` model.**
2. **Implement the corresponding CRUD operations using Sequelize methods in a `productController.js` file.**
3. **Test the API endpoints using Postman (or a similar tool) to create, read, update, and delete products in your database.**

## Next Steps for Day 10:

- We'll focus on building a User model and handling user-related data, including password hashing and security considerations.