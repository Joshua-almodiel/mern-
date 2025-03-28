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
The Construction Workers Management System (CWMS) is a web application designed to streamline the management of construction workers, their salaries, and associated data. The system allows managers to add, update, and view worker information, making it easier to handle payroll and worker assignments.

## Features
- **User Authentication**: Secure login and access control for managers.
- **Worker Management**: Add, edit, and delete worker profiles.
- **Salary Management**: Add and manage salaries for workers, including bonuses and advance payments.
- **Site Management**: Manage different construction sites and their associated workers.
- **Responsive Design**: User-friendly interface that works on various devices.

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
1. Navigate to `http://localhost:3000` in your web browser to access the application.
2. Log in with your credentials.
3. Use the navigation menu to access different features such as adding workers, managing salaries, and viewing reports.

## Components

### Add Salary Component
The `Add` component allows managers to add salary information for construction workers. It includes the following functionalities:

- **Fetching Sites**: On component mount, it fetches available construction sites using the `fetchSites` utility function.
- **Fetching Workers**: When a site is selected, it fetches the associated workers using the `getWorkers` utility function.
- **Form Handling**: The component maintains a state for salary details and handles form submissions to add salary data to the backend.

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
    // Submit salary data to the backend
  };
  // Render form elements
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
      "message": "Salary added successfully."
    }
    ```

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

This documentation provides a comprehensive overview of the CWMS project, its features, and how to set it up and use it effectively. For further details, please refer to the codebase or reach out to the project maintainers.