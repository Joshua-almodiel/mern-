# Construction Workers Management System (CWMS) Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Components Overview](#components-overview)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction
The Construction Workers Management System (CWMS) is a web application designed to streamline the management of construction workers, their salaries, and associated data. The system allows administrators to add, update, and manage worker information, as well as track salary payments and site assignments.

## Features
- **User Authentication**: Secure login for administrators.
- **Worker Management**: Add, edit, and delete worker profiles.
- **Salary Management**: Add and manage salaries for workers.
- **Site Management**: Manage construction sites and assign workers to sites.
- **Responsive Design**: Mobile-friendly interface for easy access on various devices.

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
   Create a `.env` file in the backend directory and add the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

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
Once the application is running, navigate to `http://localhost:3000` in your web browser. You will be prompted to log in. After logging in, you can manage workers, salaries, and sites through the user interface.

## API Endpoints
### Authentication
- **POST /api/auth/login**: Authenticate user and return a JWT token.

### Workers
- **GET /api/workers**: Retrieve a list of all workers.
- **POST /api/workers/add**: Add a new worker.
- **PUT /api/workers/update/:id**: Update worker information.
- **DELETE /api/workers/delete/:id**: Delete a worker.

### Salaries
- **GET /api/salary**: Retrieve a list of all salaries.
- **POST /api/salary/add**: Add a new salary record.
- **PUT /api/salary/update/:id**: Update salary information.
- **DELETE /api/salary/delete/:id**: Delete a salary record.

### Sites
- **GET /api/sites**: Retrieve a list of all sites.
- **POST /api/sites/add**: Add a new site.
- **PUT /api/sites/update/:id**: Update site information.
- **DELETE /api/sites/delete/:id**: Delete a site.

## Components Overview
### Add.jsx
The `Add` component is responsible for adding new salary records. It includes:
- **State Management**: Uses React hooks to manage salary data, sites, and workers.
- **Data Fetching**: Fetches sites and workers based on user selection.
- **Form Handling**: Handles form submission and validation.

### Other Components
- **WorkerList.jsx**: Displays a list of workers.
- **SiteList.jsx**: Displays a list of construction sites.
- **Login.jsx**: Handles user authentication.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This documentation provides a comprehensive overview of the CWMS project, including its features, setup instructions, and component details. For further assistance, please refer to the project's GitHub repository or contact the maintainers.