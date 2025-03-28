import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext.jsx";

const View = () => {
  const [salaries, setSalaries] = useState(null);
  const [filteredSalaries, setFilteredSalaries] = useState([]);
  const { id } = useParams();
  const { user } = useAuth();

  const fetchSalaries = async () => {
    try {
      console.log("Fetching salary for ID:", id);
      const response = await axios.get(
        `https://mern-topaz-eta.vercel.app/api/salary/${id}/${user.role}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      console.log("API Response: ", response.data);

      if (response.data.success) {
        setSalaries(response.data.salary);
        setFilteredSalaries(response.data.salary);
      }
    } catch (error) {
      console.error("Error fetching salary:", error);
    }
  };

  useEffect(() => {
    fetchSalaries();
  }, []);

  const filterSalaries = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredRecords = salaries.filter((salary) =>
      salary.workerId.workerId.toLowerCase().includes(query)
    );
    setFilteredSalaries(filteredRecords);
  };

  return (
    <>
      {filteredSalaries ? (
        <div className="p-6 bg-gray-900 text-white">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Salary History</h2>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search By Workers ID"
              onChange={filterSalaries}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
          </div>

          {filteredSalaries.length > 0 ? (
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left">Worker ID</th>
                    <th className="px-4 py-2 text-left">Salary</th>
                    <th className="px-4 py-2 text-left">Bunos</th>
                    <th className="px-4 py-2 text-left">Advance Salary</th>
                    <th className="px-4 py-2 text-left">Total</th>
                    <th className="px-4 py-2 text-left">Pay Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSalaries.map((salary) => (
                    <tr
                      key={salary.id}
                      className="border-b border-gray-700 hover:bg-gray-700 transition duration-200"
                    >
                      <td className="px-4 py-2">{salary.workerId.workerId}</td>
                      <td className="px-4 py-2">{salary.basicSalary}</td>
                      <td className="px-4 py-2">{salary.bunos}</td>
                      <td className="px-4 py-2">{salary.advanceSalary}</td>
                      <td className="px-4 py-2">{salary.netSalary}</td>
                      <td className="px-4 py-2">
                        {new Date(salary.payDate).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              No Records Found
            </div>
          )}
        </div>
      ) : (
        <div className="p-8 text-center">
          <svg
            className="w-16 h-16 mx-auto text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-300">
            Loading Salaries...
          </h3>
        </div>
      )}
    </>
  );
};

export default View;
