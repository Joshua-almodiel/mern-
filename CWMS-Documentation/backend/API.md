# Construction Workers Management System (CWMS) Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Components](#components)
   - [Add Salary Component](#add-salary-component)
7. [API Endpoints](#api-endpoints)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction
The Construction Workers Management System (CWMS) is a web application designed to streamline the management of construction workers, their salaries, and associated data. This system allows managers to add, view, and manage worker information and salaries efficiently.

## Features
- **Worker Management**: Add, edit, and delete worker information.
- **Salary Management**: Add and manage salaries for construction workers.
- **Site Management**: Manage different construction sites and associate workers with them.
- **User Authentication**: Secure access to the system with user authentication.
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
   ```bash
   npm install
   ```

3. **Set up the backend**:
   - Navigate to the backend directory and install dependencies.
   - Create a `.env` file for environment variables (e.g., database connection string, JWT secret).
   - Run the backend server:
     ```bash
     npm start
     ```

4. **Run the frontend**:
   - Navigate to the frontend directory and install dependencies.
   - Run the frontend application:
     ```bash
     npm start
     ```

## Usage
Once the application is running, you can access it in your web browser at `http://localhost:3000`. You will be able to log in, manage workers, and add salaries through the user interface.

## Components

### Add Salary Component
The `Add` component allows managers to add salary information for construction workers. It includes the following features:

- **Site Selection**: Dropdown to select a construction site. Fetches associated workers based on the selected site.
- **Worker Selection**: Dropdown to select a worker from the fetched list.
- **Salary Input Fields**: Input fields for basic salary, bonuses, advance salary, and pay date.
- **Form Submission**: Submits the salary data to the backend API.

#### Code Excerpt
```jsx
const Add = () => {
  const [salary, setSalary] = useState({
    workerId: null,
    basicSalary: 0,
    bunos: 0,
    advanceSalary: 0,
    payDate: null,
  });
  // ... other state variables and useEffect for fetching sites
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit salary data to the API
  };
  // Render form
};
```

## API Endpoints
- **POST /api/salary/add**: Adds a new salary entry.
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
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Salary added successfully"
    }
    ```

## Contributing
Contributions are welcome! If you would like to contribute to the CWMS project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This documentation provides a comprehensive overview of the CWMS project, its features, and how to set it up and use it. For further details, please refer to the codebase or reach out to the project maintainers.