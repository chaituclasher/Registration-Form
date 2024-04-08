# Registration Form Project

This project implements a simple registration form with backend functionality using Express.js and MongoDB, deployed on Render.

## Overview

The registration form allows users to sign up by providing their name, email, and password. Upon submission, the backend validates the user's input and checks if the email already exists in the database. If the email exists, it redirects the user to an error page with a corresponding message. Otherwise, it redirects to another error page indicating an incorrect password (assuming password validation logic is implemented).

## Technologies Used

- **Express.js:** A minimalist web framework for Node.js used to handle HTTP requests and responses.
- **MongoDB:** A NoSQL database used for storing user registration data.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js, used to simplify interactions with the MongoDB database.
- **Body-parser:** Middleware for Express.js used to parse incoming request bodies.
- **dotenv:** A module used to load environment variables from a `.env` file into `process.env`.
- **Path:** A core module in Node.js used for working with file and directory paths.
- **Render:** A cloud platform used for deploying and scaling web applications.

## Project Structure

The project structure is as follows:

- **`index.js`:** Entry point of the application containing server setup, routes, and database connection logic.
- **`pages`:** Directory containing static HTML files for the registration form and error pages.
- **`.env`:** Configuration file containing environment variables such as MongoDB credentials and port number.
- **`package.json`:** Manifest file containing project metadata and dependencies.

## Setup Instructions

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using the following command:
    ```bash
    npm install
    ```
4. Create a `.env` file at the root of the project with the following variables:
    - `PORT`: Port number for the server (default is 3000).
    - `MONGODB_USERNAME`: MongoDB username.
    - `MONGODB_PASSWORD`: MongoDB password.
5. Start the server using the following command:
    ```bash
    node index.js
    ```
6. Access the application in your web browser at `http://localhost:<PORT>`.

## Deployment

The project is deployed on Render at [https://registration-form-ehla.onrender.com](https://registration-form-ehla.onrender.com).
