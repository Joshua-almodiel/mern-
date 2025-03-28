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
The Construction Workers Management System (CWMS) is a web application designed to streamline the management of construction workers, their salaries, and associated data. The system allows managers to add, update, and view worker information and salary details efficiently.

## Features
- **User Authentication**: Secure login for managers.
- **Worker Management**: Add, edit, and delete worker profiles.
- **Salary Management**: Add and manage salaries for workers.
- **Site Management**: Manage construction sites and associate workers with sites.
- **Responsive Design**: Mobile-friendly interface for ease of use on various devices.

## Technologies Used
- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
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
Once the application is running, navigate to `http://localhost:3000` in your web browser. You will be prompted to log in. After logging in, you can manage workers and their salaries through the dashboard.

## Components

### Add Salary Component
The `Add` component allows managers to add salary details for construction workers. It includes the following functionalities:

- **Fetch Sites**: Retrieves a list of construction sites from the server.
- **Fetch Workers**: Retrieves a list of workers associated with a selected site.
- **Handle Form Submission**: Submits the salary details to the server.

#### Code Overview
```jsx
import React, { useEffect, useState } from "react";
import { fetchSites, getWorkers } from "../../Utilities/WorkerHelper.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [salary, setSalary] = useState({
    workerId: null,
    basicSalary: 0,
    bunos: 0,
    advanceSalary: 0,
    payDate: null,
  });
  const [sites, setSites] = useState(null);
  const [workers, setWorkers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSites = async () => {
      const sites = await fetchSites();
      setSites(sites);
    };

    getSites();
  }, []);

  const handleSite = async (e) => {
    const siteId = e.target.value;
    if (!siteId) {
      setWorkers([]);
      return;
    }

    try {
      const works = await getWorkers(siteId);
      setWorkers(works);
      setSalary((prev) => ({ ...prev, workerId: null }));
    } catch (error) {
      console.error("Failed to fetch workers:", error);
      setWorkers([]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalary((prevData) => ({ ...prevData, [name]: value }));
  };

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
      if (response.data.success) {
        navigate("/manager-dashboard/workers");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    // JSX for rendering the form
  );
};

export default Add;
```

## API Endpoints
- **POST /api/salary/add**: Adds a new salary entry.
- **GET /api/sites**: Retrieves a list of construction sites.
- **GET /api/workers/:siteId**: Retrieves a list of workers associated with a specific site.

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This documentation provides a comprehensive overview of the CWMS project, its features, and how to use it effectively. For further information, please refer to the source code or contact the project maintainers.