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
The Construction Workers Management System (CWMS) is a web application designed to streamline the management of construction workers, their salaries, and associated data. The system allows administrators to add, update, and manage worker information, including salary details, site assignments, and more.

## Features
- **User Authentication**: Secure login and access control for different user roles.
- **Worker Management**: Add, edit, and delete worker profiles.
- **Salary Management**: Add and manage salaries for construction workers.
- **Site Management**: Manage construction sites and their associated workers.
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
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the necessary environment variables (e.g., database connection string, JWT secret).

4. **Run the application**:
   ```bash
   npm start
   ```

## Usage
Once the application is running, navigate to `http://localhost:3000` in your web browser. You will be greeted with the login page. After logging in, you can access various features of the CWMS, including managing workers and salaries.

## Components

### Add Salary Component
The `Add` component is responsible for adding salary details for construction workers. It includes the following functionalities:

- **Fetching Sites**: On component mount, it fetches available construction sites using the `fetchSites` utility function.
- **Fetching Workers**: When a site is selected, it fetches the associated workers using the `getWorkers` utility function.
- **Form Handling**: It manages the salary form state and handles form submission to add a new salary record.

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

  const handleSite = async (e) => {
    const siteId = e.target.value;
    // Fetch workers based on selected site
  };

  const handleChange = (e) => {
    // Update salary state based on form input
  };

  const handleSubmit = async (e) => {
    // Submit salary data to the server
  };

  return (
    // JSX for rendering the form
  );
};
```

## API Endpoints
- **POST /api/salary/add**: Adds a new salary record.
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
Contributions are welcome! If you would like to contribute to the CWMS project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This documentation provides a comprehensive overview of the CWMS project, its features, and how to get started. For further assistance, please refer to the project's GitHub repository or contact the maintainers.