
# Node.js Authentication & Authorization API

This project is a secure backend authentication system built with Node.js and Express.js using MVC architecture.

The application provides a complete authentication workflow including:

- User Registration
- Login System
- JWT Authentication
- Role-Based Authorization
- Refresh Tokens
- Logout
- Error Handling
- Request Logging
- Database Connection

This project demonstrates how to build a production-ready backend API.

---

## Features

- Authentication system
- JWT security
- Access Token & Refresh Token
- Role-Based Access Control
- Error handling middleware
- Request logging middleware
- Database connection
- Protected routes
- MVC Architecture

---

## Technologies Used

- Node.js
- Express.js
- JWT (JSON Web Tokens)
- JavaScript
- MVC Pattern

---

## Project Structure
Node/ │ 
├── config/ │
└── dbConn.js          # Database connection │ 
├── controllers/          # Business logic │ 
├── Middleware/ │   
├── verifyJWT.js      # JWT authentication │   
├── verifyRoles.js    # Role authorization │   
├── errorHandler.js   # Error handling │   
└── logs.js           # Logging middleware │ 
├── model/                # Database models │ 
├── Routes/ │   ├── auth.js │   ├── register.js │   ├── refresh.js │   ├── logout.js │   
├── root.js │   └── api/ │ ├── public/               # Static files 
├── views/                # Templates │ 
├── server.js             # Main server file 
├── package.json 
└── .gitignore

## Installation

### Clone the repository
git clone https://github.com/solafaissa042/Node.git�


### Go to project folder
cd Node


### Install dependencies
npm install


### Run the server
node server.js


or
npm start


---

## Authentication Flow

1. User registers an account
2. User logs in
3. Server generates JWT Access Token
4. Refresh Token stored securely
5. User accesses protected routes
6. Token verified by Middleware
7. User logs out

---

## Middleware

### verifyJWT

Protects private routes by verifying JWT tokens.

### verifyRoles

Controls access depending on user roles.

### errorHandler

Handles application errors.

### logs

Logs incoming requests.

---

## Database

The project uses a database connection configured inside:
config/dbConn.js


---

## Learning Goals

This project was built to practice:

- Backend Development
- Node.js & Express
- Authentication Systems
- JWT Security
- Middleware
- REST APIs
- Database Integration

---

## Author

Solafa Issa

GitHub:
https://github.com/solafaissa042
