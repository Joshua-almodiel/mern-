# Construction Workers Management System (CWMS) Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Components Overview](#components-overview)
7. [API Endpoints](#api-endpoints)
8. [Contributing](#contributing)
9. [License](#license)

---

## Introduction
The Construction Workers Management System (CWMS) is a web application designed to streamline the management of construction workers, their salaries, and site assignments. The system allows managers to add, update, and view worker details, manage salaries, and track site assignments efficiently.

## Features
- **User Authentication**: Secure login and registration for managers.
- **Worker Management**: Add, edit, and delete worker profiles.
- **Salary Management**: Add and manage salaries for workers.
- **Site Management**: Assign workers to different construction sites.
- **Responsive Design**: User-friendly interface that works on various devices.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: RESTful API for communication between frontend and backend
- **Authentication**: JSON Web Tokens (JWT)

## Installation
To set up the CWMS project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/cwms.git
   cd cwms
   ```

2. **Install dependencies**:
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Set up environment variables**:
   Create a `.env` file in the backend directory and add the necessary environment variables (e.g., database URI, JWT secret).

4. **Run the application**:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend application:
     ```bash
     cd frontend
     npm start
     ```

## Usage
1. **Access the application**: Open your web browser and navigate to `http://localhost:3000`.
2. **Login**: Use the manager credentials to log in.
3. **Manage Workers**: Navigate to the worker management section to add or edit worker profiles.
4. **Manage Salaries**: Use the salary management section to add salaries for workers.
5. **Assign Workers to Sites**: Assign workers to specific construction sites as needed.

## Components Overview
### Add.jsx
- **Purpose**: Component for adding a new salary entry for a worker.
- **Key Features**:
  - Fetches available sites and workers based on selected site.
  - Handles form submission to add salary details.
  - Validates input fields before submission.

### Other Components
- **WorkerList.jsx**: Displays a list of workers with options to edit or delete.
- **SiteList.jsx**: Displays a list of construction sites.
- **Login.jsx**: Handles user authentication.

## API Endpoints
### Authentication
- **POST /api/auth/login**: Authenticate user and return JWT token.
- **POST /api/auth/register**: Register a new user.

### Workers
- **GET /api/workers**: Retrieve all workers.
- **POST /api/workers**: Add a new worker.
- **PUT /api/workers/:id**: Update worker details.
- **DELETE /api/workers/:id**: Delete a worker.

### Salaries
- **GET /api/salary**: Retrieve all salary records.
- **POST /api/salary/add**: Add a new salary record.

### Sites
- **GET /api/sites**: Retrieve all construction sites.
- **POST /api/sites**: Add a new site.

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This documentation provides a comprehensive overview of the CWMS project, including its features, installation instructions, and usage guidelines. For further assistance, please refer to the project's GitHub repository or contact the project maintainers.