# TaskFlow Backend API

A secure and scalable RESTful backend API for a Task Management System built with **Node.js**, **Express.js**, and **MongoDB**. The application provides JWT-based authentication, role-based authorization, task management, and administrative operations.

---

# Repository

GitHub Repository:

**https://github.com/RakSagaTech/taskFlow**

---

# Project Overview

TaskFlow Backend API is designed to provide a secure backend for a task management application. It allows users to register, log in, manage their own tasks, and enables administrators to manage users and tasks across the system.

The project follows RESTful API principles and implements authentication, authorization, request validation, and proper error handling.

---

# Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Password Hashing using bcryptjs

### Task Management

* Create Task
* View All User Tasks
* View Single Task
* Update Task
* Delete Task

### Admin Features

* View All Registered Users
* View Single User
* View All Tasks
* View Tasks of a Specific User
* Delete User
* Delete Any Task

### Security

* JWT Authentication
* Role-Based Authorization
* Joi Request Validation
* Protected Routes
* Password Encryption

---

# Tech Stack

| Technology | Purpose            |
| ---------- | ------------------ |
| Node.js    | JavaScript Runtime |
| Express.js | Backend Framework  |
| MongoDB    | Database           |
| Mongoose   | MongoDB ODM        |
| JWT        | Authentication     |
| bcryptjs   | Password Hashing   |
| Joi        | Request Validation |
| Postman    | API Testing        |

---

# Project Structure

```text
Backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── validations/
│   ├── app.js
│   └── server.js
│
├── postman/
│   └── TaskFlow_Backend_API.postman_collection.json
│
├── package.json
├── .env
├── .gitignore
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/RakSagaTech/taskFlow.git
```

Navigate to the backend folder.

```bash
cd taskFlow/Backend
```

Install dependencies.

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

You can use the provided `.env.example` file as a template.

```bash
cp .env.example .env
```

**For Windows users:** If the `cp` command is not available, simply copy the `.env.example` file, rename it to `.env`, and replace the placeholder values with your own configuration.

Example `.env` file:

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=2h

```

---

# Running the Application

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Server runs on:

```text
http://localhost:3000
```

---

# API Base URL

```text
http://localhost:3000/api/v1
```

---

# Authentication Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | `/auth/register` | Register a new user |
| POST   | `/auth/login`    | Login user          |

---

# Task Endpoints

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| POST   | `/tasks`     | Create Task    |
| GET    | `/tasks`     | Get All Tasks  |
| GET    | `/tasks/:id` | Get Task By ID |
| PUT    | `/tasks/:id` | Update Task    |
| DELETE | `/tasks/:id` | Delete Task    |

---

# Admin Endpoints

| Method | Endpoint                 | Description                |
| ------ | ------------------------ | -------------------------- |
| GET    | `/admin/users`           | Get All Users              |
| GET    | `/admin/users/:id`       | Get User By ID             |
| GET    | `/admin/tasks`           | Get All Tasks              |
| GET    | `/admin/users/:id/tasks` | Get Tasks of Specific User |
| DELETE | `/admin/users/:id`       | Delete User                |
| DELETE | `/admin/tasks/:id`       | Delete Task                |

---

# Authentication

After successful login, the API returns a JWT token.

Include the token in every protected request.

```
Authorization: Bearer <your_token>
```

---

# Authorization

The application implements Role-Based Access Control (RBAC).

### User

* Create own tasks
* View own tasks
* Update own tasks
* Delete own tasks

### Admin

* View all users
* View all tasks
* View tasks of any user
* Delete users
* Delete any task

---

# Database Models

## User

```text
username
email
password
role
createdAt
updatedAt
```

---

## Task

```text
title
description
priority
status
createdBy
createdAt
updatedAt
```

---

# Validation

All incoming requests are validated using Joi before reaching the controllers.

Validation includes:

* User Registration
* User Login
* Task Creation
* Task Update

Custom validation messages are returned for invalid input.

---

# Error Handling

The API returns meaningful HTTP status codes.

| Status | Meaning               |
| ------ | --------------------- |
| 200    | Success               |
| 201    | Resource Created      |
| 400    | Validation Error      |
| 401    | Unauthorized          |
| 403    | Forbidden             |
| 404    | Resource Not Found    |
| 409    | Conflict              |
| 500    | Internal Server Error |

---

# Postman Collection

A complete Postman collection is included in the project.

```text
postman/
└── TaskFlow_Backend_API.postman_collection.json
```

The Login request automatically stores the JWT token into a collection variable for testing protected endpoints.

---

# Security Features

* JWT Authentication
* Password Hashing with bcryptjs
* Protected Routes
* Role-Based Authorization
* Request Validation
* Environment Variables
* MongoDB Object Ownership Verification

---

# Testing

The APIs were tested using Postman.

Tested scenarios include:

* User Registration
* User Login
* JWT Authentication
* Task CRUD Operations
* Admin APIs
* Authorization
* Validation
* Error Responses

---

# Author

**Rakesh Sagar Sandola**

Backend Developer Assignment

GitHub:

https://github.com/RakSagaTech/taskFlow

