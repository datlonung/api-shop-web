# RESTful API with Node.js, Express, and MongoDB

This project implements a RESTful API for managing products, carts, and users using Node.js, Express, and MongoDB.

---

## **Features**
- User management with roles (`user` and `admin`).
- CRUD operations for products, carts, and users.
- MongoDB for data storage.
- Password hashing for secure user management (if implemented with `bcrypt`).

---

## **API Endpoints**

### **Products API**
| Method | Endpoint                                   | Description                                     |
|--------|-------------------------------------------|-------------------------------------------------|
| GET    | `/api/products`                           | Get all products.                              |
| GET    | `/api/products/{id}`                      | Get a product by ID.                           |
| GET    | `/api/products/category/{category}`       | Get products by category.                      |
| POST   | `/api/products`                           | Create a new product (use Postman).            |
| PUT    | `/api/products/{id}`                      | Update a product by ID (use Postman).          |
| DELETE | `/api/products/{id}`                      | Delete a product by ID (use Postman).          |

---

### **Carts API**
| Method | Endpoint                   | Description                                    |
|--------|----------------------------|------------------------------------------------|
| GET    | `/api/carts`               | Get all carts.                                |
| GET    | `/api/carts/{id}`          | Get a cart by ID.                             |
| POST   | `/api/carts`               | Create a new cart (use Postman).              |
| PUT    | `/api/carts/{id}`          | Update a cart by ID (use Postman).            |
| DELETE | `/api/carts/{id}`          | Delete a cart by ID (use Postman).            |

---

### **Users API**
| Method | Endpoint                   | Description                                    |
|--------|----------------------------|------------------------------------------------|
| GET    | `/api/users`               | Get all users.                                |
| GET    | `/api/users/{id}`          | Get a user by ID.                             |
| POST   | `/api/users`               | Create a new user (use Postman).              |
| PUT    | `/api/users/{id}`          | Update a user by ID (use Postman).            |
| DELETE | `/api/users/{id}`          | Delete a user by ID (use Postman).            |
| POST   | `/api/users/register`      | Register a user.                              |

---

## **Usage Instructions**

### 1. **Clone the Repository**
git clone <repository_url>
cd <repository_name>
### 2. Install Dependencies
npm install
### 3. Set Up Environment Variables
MONGO_URI=mongodb+srv://<username>:<password>@<cluster_url>/<database_name>?retryWrites=true&w=majority
PORT=5000
### 4. Run the Application
npm start
