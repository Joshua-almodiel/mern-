import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { columns, LeaveButtons } from "../../Utilities/LeaveHelper.jsx";
import axios from "axios";

const TableLeave = () => {
  const [leaves, setLeaves] = useState([]);
  const [searchWorkers, setSearchWorkers] = useState([]);

  const noRecords = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    color: "white",
    backgroundColor: "#1F2937",
    fontSize: "1.5rem",
    fontWeight: "500",
    padding: "2rem",
    borderRadius: "0.5rem",
  }

  const fetchLeaves = async () => {
    try {
      const responnse = await axios.get("https://mern-topaz-eta.vercel.app/api/leave", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(responnse);
      if (responnse.data.success) {
        let sno = 1;
        const data = await responnse.data.leaves.map((leave) => ({
          _id: leave._id,
          sno: sno++,
          workerId: leave.workerId.workerId,
          name: leave.workerId.userId.name,
          leaveType: leave.leaveType,
          site: leave.workerId.site.site_name,
          days:
            new Date(leave.endDate).getDate() -
            new Date(leave.startDate).getDate(),
          status: leave.status,
          action: <LeaveButtons _id={leave._id} />,
        }));
        setLeaves(data);
        setSearchWorkers(data);
      }
      console.log(responnse.data.leaves);
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  const searchWorker = (e) => {
    const data = leaves.filter((leave) =>
      leave.workerId.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchWorkers(data);
  };

  const searchByButton = (status) => {
    const data = leaves.filter((leave) =>
      leave.status.toLowerCase().includes(status.toLowerCase())
    );
    setSearchWorkers(data);
  };

  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#1F2937",
        color: "#FFFFFF",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#1F2937",
        color: "#FFFFFF",
        fontSize: "0.875rem",
        fontWeight: "600",
      },
    },
    pagination: {
      style: {
        backgroundColor: "#1F2937",
        color: "#FFFFFF",
      },
    },
  };

  return (
    <>
      {setSearchWorkers ? (
        <div className="p-6 bg-gray-900 text-white overflow-hidden">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Manage Workers Leaves</h3>
          </div>

          <div className="flex items-center justify-between mb-6">
            <input
              type="text"
              placeholder="Search by workers ID"
              onChange={searchWorker}
              className="w-full max-w-md px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />

            <div className="flex space-x-4">
              <button
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-200"
                onClick={() => searchByButton("Pending")}
              >
                Pending
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={() => searchByButton("Approved")}
              >
                Approved
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                onClick={() => searchByButton("Rejected")}
              >
                Rejected
              </button>
            </div>
          </div>

          {searchWorkers.length > 0 ? (
            <DataTable
              columns={columns}
              data={searchWorkers}
              customStyles={customStyles}
              pagination
              highlightOnHover
              responsive
            />
          ) : (
            <div style={noRecords}>No Records Found</div>
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
            Loading Workers Leaves...
          </h3>
        </div>
      )}
    </>
  );
};

export default TableLeave;
