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

- `400 Bad Request`: Registration failed
  ```json
  {
    "message": "User registration failed"
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
    "message": "User logged in successfully",
    "user": {
      "id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    },
    "token": "JWT_TOKEN"
  }
  ```

- `400 Bad Request`: Missing fields
  ```json
  {
    "message": "Email and password are required"
  }
  ```

- `400 Bad Request`: Validation error
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email format",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

- `401 Unauthorized`: User not found
  ```json
  {
    "message": "User not registered"
  }
  ```

- `401 Unauthorized`: Invalid credentials
  ```json
  {
    "message": "Invalid credentials"
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
    "message": "Token not found"
  }
  ```

- `401 Unauthorized`: Token blacklisted
  ```json
  {
    "message": "Token is blacklisted"
  }
  ```

- `401 Unauthorized`: Invalid token
  ```json
  {
    "message": "Token is unauthorized"
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

#### User Logout

```
GET /users/logout
```

**Headers:**
- `Authorization`: Bearer JWT_TOKEN

**Response:**

- `200 OK`: Logout successful
  ```json
  {
    "message": "User logged out successfully"
  }
  ```

- `400 Bad Request`: No token provided
  ```json
  {
    "message": "No token provided"
  }
  ```

- `401 Unauthorized`: Authentication failed
  ```json
  {
    "message": "Token not found"
  }
  ```

- `500 Internal Server Error`: Server error
  ```json
  {
    "message": "Server error",
    "error": "Error message"
  }
  ```

### Captain Management

#### Register a new captain

```
POST /captains/register
```

**Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Driver",
  "email": "john.driver@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "numberPlate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  },
  "location": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
}
```

**Validation Rules:**
- `firstName`: Required, minimum 3 characters
- `lastName`: Required, minimum 3 characters
- `email`: Required, valid email format
- `password`: Required, minimum 6 characters
- `vehicle`: Required object with:
  - `color`: Required
  - `numberPlate`: Required
  - `capacity`: Required, must be a number
  - `vehicleType`: Required, one of: 'car', 'auto', 'bike'
- `location`: Optional object with:
  - `latitude`: Number
  - `longitude`: Number

**Response:**

- `201 Created`: Captain successfully registered
  ```json
  {
    "message": "Captain registered successfully",
    "captain": {
      "id": "captain_id",
      "firstName": "John",
      "lastName": "Driver",
      "email": "john.driver@example.com",
      "vehicle": {
        "color": "Black",
        "numberPlate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
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

- `400 Bad Request`: Captain already exists
  ```json
  {
    "message": "Captain already exists with this email"
  }
  ```

- `400 Bad Request`: Missing required fields
  ```json
  {
    "message": "Vehicle information is required"
  }
  ```

- `500 Internal Server Error`: Server error
  ```json
  {
    "message": "Server error",
    "error": "Error message"
  }
  ```

#### Captain Login

```
POST /captains/login
```

**Request Body:**

```json
{
  "email": "john.driver@example.com",
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
    "message": "Captain logged in successfully",
    "captain": {
      "id": "captain_id",
      "firstName": "John",
      "lastName": "Driver",
      "email": "john.driver@example.com",
      "vehicle": {
        "color": "Black",
        "numberPlate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    },
    "token": "JWT_TOKEN"
  }
  ```

- `400 Bad Request`: Validation error
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email format",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

- `401 Unauthorized`: Captain not found
  ```json
  {
    "message": "User not registered"
  }
  ```

- `401 Unauthorized`: Invalid password
  ```json
  {
    "message": "Invalid password"
  }
  ```

- `500 Internal Server Error`: Server error
  ```json
  {
    "message": "Server error",
    "error": "Error message"
  }
  ```

#### Get Captain Profile

```
GET /captains/profile
```

**Headers:**
- `Authorization`: Bearer JWT_TOKEN

**Response:**

- `200 OK`: Profile retrieved
  ```json
  {
    "message": "Captain profile fetched successfully",
    "captain": {
      "id": "captain_id",
      "firstName": "John",
      "lastName": "Driver",
      "email": "john.driver@example.com",
      "vehicle": {
        "color": "Black",
        "numberPlate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

- `401 Unauthorized`: Authentication failed
  ```json
  {
    "message": "Token not found"
  }
  ```

- `401 Unauthorized`: Token blacklisted
  ```json
  {
    "message": "Token is blacklisted"
  }
  ```

- `401 Unauthorized`: Invalid token
  ```json
  {
    "message": "Token is unauthorized"
  }
  ```

- `404 Not Found`: Captain not found
  ```json
  {
    "message": "Captain not found"
  }
  ```

- `500 Internal Server Error`: Server error
  ```json
  {
    "message": "Server error",
    "error": "Error message"
  }
  ```

#### Captain Logout

```
GET /captains/logout
```

**Headers:**
- `Authorization`: Bearer JWT_TOKEN

**Response:**

- `200 OK`: Logout successful
  ```json
  {
    "message": "Captain logged out successfully"
  }
  ```

- `401 Unauthorized`: Authentication failed
  ```json
  {
    "message": "Token not found"
  }
  ```

- `404 Not Found`: Captain not found
  ```json
  {
    "message": "Captain not found"
  }
  ```

- `500 Internal Server Error`: Server error
  ```json
  {
    "message": "Server error",
    "error": "Error message"
  }
  ```

## Authentication Flow

1. **Register**: Create a new user or captain account
2. **Login**: Authenticate and receive a JWT token
3. **Use Token**: Include the token in the Authorization header for protected routes
4. **Logout**: Invalidate the token when finished

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

### Captain

```json
{
  "firstName": "String, required, min length 3",
  "lastName": "String, required, min length 3",
  "email": "String, required, unique, valid email format",
  "password": "String, required, stored as hashed",
  "socketId": "String, optional",
  "status": "String, enum: ['active', 'inactive'], default: 'inactive'",
  "vehicle": {
    "color": "String, required, min length 3",
    "numberPlate": "String, required, min length 3",
    "capacity": "Number, required, min: 1",
    "vehicleType": "String, required, enum: ['car', 'auto', 'bike']"
  },
  "location": {
    "latitude": "Number",
    "longitude": "Number"
  }
}
```

### BlacklistedToken

```json
{
  "token": "String, required, unique",
  "createdAt": "Date, default: current date, expires after 24 hours"
}
```