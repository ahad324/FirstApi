# Product Management API

## Overview

The Product Management API is a RESTful API built with Node.js and Express, designed to manage a collection of products. It allows users to perform CRUD operations on product data, including filtering, sorting, and pagination. The API is connected to a MongoDB database using Mongoose for data modeling.

## Features

- **Product Management**: Create, read, update, and delete products.
- **Filtering**: Filter products by company, name, and featured status.
- **Sorting**: Sort products based on various fields.
- **Pagination**: Retrieve products in a paginated format.
- **Environment Configuration**: Use environment variables for configuration.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon (for development)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm (Node package manager)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ahad324/FirstApi.git
   cd FirstApi
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   MONGODB_URI=<your-mongodb-uri>
   PORT=3000
   ```

   Replace `<your-mongodb-uri>` with your actual MongoDB connection string.

4. **Seed the database** (optional):

   If you want to populate the database with initial product data, run:

   ```bash
   node productDB.js
   ```

### Running the Application

To start the server, run:
```bash
npm start
```

For development mode with automatic restarts, use:
```bash
npm run dev
```

The server will be running on `http://localhost:3000`.

## API Endpoints

### Get All Products

- **Endpoint**: `GET /api/products`
- **Query Parameters**:
  - `company`: Filter by company name.
  - `name`: Filter by product name (supports regex).
  - `featured`: Filter by featured status (true/false).
  - `sort`: Sort by fields (comma-separated).
  - `select`: Select specific fields (comma-separated).
  - `page`: Page number for pagination.
  - `limit`: Number of products per page.

**Example Requests**:

1. **Retrieve products from a specific company, sorted by price and name (descending)**:
   - **Request**:
   ```
   GET /api/products?company=apple&sort=price,-name&page=1&limit=5
   ```
   - **Description**: This request fetches products from the company "apple", sorted by price in ascending order and name in descending order.

2. **Retrieve featured products with a specific name, sorted by name and featured status**:
   - **Request**:
   ```
   GET /api/products?company=Apple&name=MacBook&featured=true&sort=name,featured&page=1&limit=10
   ```
   - **Description**: This request retrieves featured products with the name "MacBook" from the company "Apple", sorted by name and featured status.


### Get All Products Testing

- **Endpoint**: `GET /api/products/testing`
- **Description**: Returns a simplified list of products with only name and company fields.

**Example Request**:
`GET /api/products/testing`

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

### Made with ♥ by [AbdulAhad](https://github.com/ahad324)

---

Thank you for exploring this project! Your feedback and contributions are always welcome.