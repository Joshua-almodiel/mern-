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
- **User Authentication**: Secure login for managers.
- **Worker Management**: Add, edit, and delete worker records.
- **Salary Management**: Add and manage salaries for workers.
- **Site Management**: Manage construction sites and associated workers.
- **Responsive Design**: Accessible on various devices.

## Technologies Used
- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: Tailwind CSS

## Installation
To set up the CWMS project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cwms.git
   cd cwms
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your database connection string and any other necessary configurations.

4. Start the development server:
   ```bash
   npm start
   ```

## Usage
Once the application is running, navigate to `http://localhost:3000` in your web browser. You can log in with your manager credentials and start managing workers and their salaries.

## Components

### Add Salary Component
The `Add` component allows managers to add salary information for construction workers. Below is a brief overview of its functionality:

- **State Management**: Uses React's `useState` to manage salary data, sites, and workers.
- **Data Fetching**: Utilizes `useEffect` to fetch sites when the component mounts.
- **Event Handlers**:
  - `handleSite`: Fetches workers based on the selected site.
  - `handleChange`: Updates salary state based on user input.
  - `handleSubmit`: Submits the salary data to the backend API.

#### Code Snippet
```jsx
const Add = () => {
  const [salary, setSalary] = useState({
    workerId: null,
    basicSalary: 0,
    bunos: 0,
    advanceSalary: 0,
    payDate: null,
  });
  // ... other state variables and useEffect

  const handleSite = async (e) => {
    // Fetch workers based on selected site
  };

  const handleChange = (e) => {
    // Update salary state
  };

  const handleSubmit = async (e) => {
    // Submit salary data
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
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This documentation provides a comprehensive overview of the CWMS project, its features, and how to use it effectively. For further questions or issues, please refer to the project's GitHub repository or contact the maintainers.