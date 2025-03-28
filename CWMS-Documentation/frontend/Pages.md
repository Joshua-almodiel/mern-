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
The Construction Workers Management System (CWMS) is a web application designed to manage construction workers' information, including their salaries, site assignments, and personal details. The system aims to streamline the management process, making it easier for managers to track and manage worker data efficiently.

## Features
- **Worker Management**: Add, edit, and delete worker information.
- **Salary Management**: Add and manage salaries for construction workers.
- **Site Management**: Manage construction sites and assign workers to specific sites.
- **User Authentication**: Secure login and access control for managers.
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
Once the application is running, navigate to `http://localhost:3000` in your web browser. You will be greeted with the login page. After logging in, you can access various features of the CWMS, including adding workers, managing salaries, and viewing site assignments.

## Components

### Add Salary Component
The `Add` component allows managers to add salary details for construction workers. It includes the following functionalities:

- **Fetching Sites**: On component mount, it fetches available construction sites using the `fetchSites` utility function.
- **Fetching Workers**: When a site is selected, it fetches the corresponding workers using the `getWorkers` utility function.
- **Form Handling**: The component manages form state using React's `useState` hook and handles form submission with Axios to post salary data to the backend.

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
    try {
      const response = await axios.post(
        `https://mern-topaz-eta.vercel.app/api/salary/add`,
        salary,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // Handle successful response
    } catch (error) {
      // Handle error
    }
  };

  return (
    // JSX for rendering the form
  );
};
```

## API Endpoints
- **POST /api/salary/add**: Adds a new salary entry for a worker.
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
      "success": "boolean",
      "error": "string" // Optional, only if success is false
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

This documentation provides a comprehensive overview of the CWMS project, its features, and how to use it effectively. For further assistance, please refer to the project's GitHub repository or contact the maintainers.