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

## Introduction
The Construction Workers Management System (CWMS) is a web application designed to streamline the management of construction workers, their salaries, and associated data. The system allows administrators to add, update, and manage worker information, as well as track salary payments and other relevant details.

## Features
- **User Authentication**: Secure login and registration for users.
- **Worker Management**: Add, edit, and delete worker profiles.
- **Salary Management**: Add and manage salaries for workers.
- **Site Management**: Manage construction sites and associate workers with specific sites.
- **Responsive Design**: Mobile-friendly interface for ease of use on various devices.

## Technologies Used
- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: Tailwind CSS

## Installation
To set up the CWMS project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/cwms.git
   cd cwms
   ```

2. **Install dependencies**:
   For the frontend:
   ```bash
   cd front
   npm install
   ```

   For the backend:
   ```bash
   cd back
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the backend directory and add the necessary environment variables (e.g., database connection string, JWT secret).

4. **Run the application**:
   Start the backend server:
   ```bash
   cd back
   npm start
   ```

   Start the frontend application:
   ```bash
   cd front
   npm start
   ```

## Usage
1. **Access the Application**: Open your web browser and navigate to `http://localhost:3000`.
2. **User Registration/Login**: Register a new account or log in with existing credentials.
3. **Manage Workers**: Use the dashboard to add, edit, or delete worker profiles.
4. **Manage Salaries**: Navigate to the salary management section to add or update worker salaries.

## Components Overview
### Add.jsx
- **Purpose**: Component for adding new salary records for workers.
- **Key Features**:
  - Fetches available sites and workers based on selected site.
  - Handles form submission to add salary data.
  - Validates input fields and displays error messages as needed.

### Other Components
- **WorkerList.jsx**: Displays a list of workers with options to edit or delete.
- **SiteList.jsx**: Displays a list of construction sites.
- **Dashboard.jsx**: Main dashboard for navigating between different management sections.

## API Endpoints
### Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Authenticate a user and return a JWT.

### Workers
- `GET /api/workers`: Retrieve a list of all workers.
- `POST /api/workers`: Add a new worker.
- `PUT /api/workers/:id`: Update worker details.
- `DELETE /api/workers/:id`: Delete a worker.

### Salaries
- `GET /api/salary`: Retrieve salary records.
- `POST /api/salary/add`: Add a new salary record.

### Sites
- `GET /api/sites`: Retrieve a list of all construction sites.
- `POST /api/sites`: Add a new construction site.

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