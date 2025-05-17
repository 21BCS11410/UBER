# UBER Clone API Documentation

This document provides information about the API endpoints available in the UBER Clone application.

## Base URL

```
http://localhost:5000
```

## Authentication

Most endpoints require authentication via JWT token. Include the token in the Authorization header:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

## Endpoints

### User Management

#### Register a new user

```
POST /users/register
```

**Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Validation Rules:**

- `firstName`: Required, minimum 3 characters
- `lastName`: Required, minimum 3 characters
- `email`: Required, valid email format
- `password`: Required, minimum 6 characters

**Response:**

- `201 Created`: User successfully registered

  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    },
    "token": "JWT_TOKEN"
  }
  ```

- `400 Bad Request`: Validation error

  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters",
        "param": "firstName",
        "location": "body"
      }
    ]
  }
  ```

- `400 Bad Request`: User already exists

  ```json
  {
    "message": "User already exists with this email"
  }
  ```

- `500 Internal Server Error`: Server error
  ```json
  {
    "message": "Server error",
    "error": "Error message"
  }
  ```

#### User Login

```
POST /users/login
```

**Request Body:**

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Validation Rules:**

- `email`: Required, valid email format
- `password`: Required

**Response:**

- `200 OK`: Login successful

  ```json
  {
    "message": "Login successful",
    "user": {
      "id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    },
    "token": "JWT_TOKEN"
  }
  ```

- `401 Unauthorized`: Invalid credentials

  ```json
  {
    "message": "Invalid email or password"
  }
  ```

- `500 Internal Server Error`: Server error
  ```json
  {
    "message": "Server error",
    "error": "Error message"
  }
  ```

#### Get User Profile

```
GET /users/profile
```

**Headers:**

- `Authorization`: Bearer JWT_TOKEN

**Response:**

- `200 OK`: Profile retrieved

  ```json
  {
    "user": {
      "id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    }
  }
  ```

- `401 Unauthorized`: Authentication failed

  ```json
  {
    "message": "Authentication required"
  }
  ```

- `404 Not Found`: User not found

  ```json
  {
    "message": "User not found"
  }
  ```

- `500 Internal Server Error`: Server error
  ```json
  {
    "message": "Server error",
    "error": "Error message"
  }
  ```

## Error Codes

- `200`: Success
- `201`: Resource created
- `400`: Bad request / Validation error
- `401`: Unauthorized / Authentication failed
- `404`: Resource not found
- `500`: Server error

## Data Models

### User

```json
{
  "firstName": "String, required, min length 3",
  "lastName": "String, required, min length 3",
  "email": "String, required, unique, valid email format",
  "password": "String, required, min length 6, stored as hashed",
  "socketId": "String, optional"
}
```
