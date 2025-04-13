# Revisit Technologies

This project is a simple web application with a backend and frontend. Below is an overview of the backend and frontend routes.

---

## Backend Routes

### **Authentication**

- `POST /api/users/login`  
  Logs in a user with email and password.

- `POST /api/users/logout`  
  Logs out the current user.

- `GET /api/users/check-user`  
  Checks if the user is authenticated.

---

### **Categories**

- `GET /api/shop/categories`  
  Fetches all categories.

- `POST /api/shop/categories`  
  Adds a new category (requires authentication).

---

## Frontend Routes

### **Public Routes**

- `/login`  
  Login page for users.

- `/signup`  
  Signup page for new users.

---

### **Protected Routes**

- `/`  
  Home page (requires authentication).

- `/category`  
  Displays a list of categories (requires authentication).

- `/add-category`  
  Form to add a new category (requires authentication).

---

## How to Run the Project

1. **Backend**:

   - Navigate to the backend folder.
   - Install dependencies: `npm install`.
   - Start the server: `npm start`.

2. **Frontend**:
   - Navigate to the frontend folder.
   - Install dependencies: `npm install`.
   - Start the development server: `npm start`.
   -
3. **Sample credentials**:
   - email : user1@gmail.com
   - password : 123456
   - you can use theese credentials to use application or you can register too

---

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express, Cloudinary (for image uploads)
- **Database**: MongoDB
