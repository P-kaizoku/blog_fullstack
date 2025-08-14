# Blog Fullstack Project

This is a full-stack blog application built with modern web technologies. It includes a backend API and a frontend user interface.

## Features

- User authentication and authorization
- Create, read, update, and delete blog posts
- Commenting system
- Responsive design

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v16 or higher)
- MongoDB installed and running
- Git installed

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/P-kaizoku/blog-fullstack.git
   cd blog-fullstack
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the `backend` directory.
   - Add the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

4. Start the MongoDB server if not already running:
   ```bash
   mongod
   ```

---

## Running the Project Locally

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:

   ```bash
   cd ../frontend
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License.
