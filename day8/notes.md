# Day 8: PostgreSQL & Sequelize Basics (ES6 Modules)

## What is PostgreSQL?

- A powerful, open-source **relational database** system.
- Known for its reliability, robustness, and feature richness.
- Follows SQL standards.
- We'll be using it to store and manage our application data.

## What is Sequelize?

- A **Node.js ORM (Object-Relational Mapper)** for PostgreSQL, MySQL, MariaDB, SQLite, and MS SQL Server.
- **ORM in simple terms:** It's a tool that lets you interact with your database using JavaScript objects and functions instead of writing raw SQL queries.
- **Benefits of using Sequelize:**
    - **Database Agnostic (to some extent):** You can switch databases with less code changes.
    - **Security:**  Helps prevent SQL injection vulnerabilities.
    - **Productivity:**  Makes database interactions faster and easier to write and maintain.
    - **Schema Management:**  Allows you to define your database structure (tables, columns, relationships) in JavaScript.

## Why PostgreSQL with Sequelize?

- PostgreSQL is a robust and popular choice for backend applications.
- Sequelize is a well-maintained and feature-rich ORM that works seamlessly with PostgreSQL in Node.js environments.
- This combination is widely used in modern web development for building scalable and reliable applications.

## Today's Objectives:

1. **Set up PostgreSQL (if you haven't already):**  Make sure you have PostgreSQL installed and running locally.
2. **Install Sequelize and `pg` (PostgreSQL driver for Node.js):**  We'll use `npm` to install the necessary packages.
3. **Create a `db.js` file to establish a Sequelize connection to your PostgreSQL database.**
4. **Define a simple Sequelize Model (e.g., `Product.js`) representing a table in your database.**
5. **Sync the model with the database to create the table.**
6. **Basic understanding of Sequelize model definition and database connection.**

## Next Steps for Day 9:

- We'll start performing CRUD (Create, Read, Update, Delete) operations using Sequelize with our defined models!