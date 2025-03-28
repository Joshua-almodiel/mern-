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
The Construction Workers Management System (CWMS) is a web application designed to streamline the management of construction workers, their salaries, and associated tasks. The system allows managers to add, update, and view worker details, manage salaries, and generate reports.

## Features
- **User Authentication**: Secure login and registration for managers.
- **Worker Management**: Add, edit, and delete worker profiles.
- **Salary Management**: Add and manage salaries for workers.
- **Site Management**: Manage construction sites and associate workers with sites.
- **Responsive Design**: Mobile-friendly interface for easy access on various devices.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **API Client**: Axios

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
1. **Access the application**: Open your browser and navigate to `http://localhost:3000`.
2. **Login**: Use the manager credentials to log in.
3. **Manage Workers**: Navigate to the worker management section to add or edit worker details.
4. **Manage Salaries**: Use the salary management section to add salaries for workers.

## Components Overview
### Add.jsx
The `Add.jsx` component is responsible for adding new salary records for construction workers. It includes:
- **State Management**: Uses React hooks to manage state for salary details, sites, and workers.
- **API Calls**: Fetches sites and workers using utility functions and Axios.
- **Form Handling**: Handles form submission to add salary records.

### Other Components
- **WorkerList.jsx**: Displays a list of workers with options to edit or delete.
- **SiteList.jsx**: Displays a list of construction sites.
- **Dashboard.jsx**: Main dashboard for managers to navigate the application.

## API Endpoints
### Salary Management
- **POST /api/salary/add**: Add a new salary record.
  - **Request Body**: 
    ```json
    {
      "workerId": "string",
      "basicSalary": "number",
      "bunos": "number",
      "advanceSalary": "number",
      "payDate": "date"
    }
    ```

### Worker Management
- **GET /api/workers**: Retrieve a list of workers.
- **POST /api/workers**: Add a new worker.
- **PUT /api/workers/:id**: Update a worker's details.
- **DELETE /api/workers/:id**: Delete a worker.

### Site Management
- **GET /api/sites**: Retrieve a list of sites.
- **POST /api/sites**: Add a new site.

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

This documentation provides a comprehensive overview of the CWMS project, including its features, setup instructions, and component details. For further information or specific queries, please refer to the codebase or contact the project maintainers.