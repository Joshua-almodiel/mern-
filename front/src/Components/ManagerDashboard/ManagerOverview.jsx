import React, { useEffect, useState } from "react";
import WorkerSalaryGraph from "../Graph/WorkerSalaryGraph.jsx";
import SummaryCard from "./SummaryCard";

import {
  FaUsers,
  FaBuilding,
  FaMoneyBillWave,
  FaFileAlt,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle,
} from "react-icons/fa";
import axios from "axios";

const ManagerOverview = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const summary = await axios.get(
          "https://mern-topaz-eta.vercel.app/api/dashboard/summary",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setSummary(summary.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    };
    fetchSummary();
  }, []);

  if (!summary) {
    return (
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
          Loading Summary...
        </h3>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8 bg-gray-900 text-white overflow-hidden">
      <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
        Manager Dashboard Overview
      </h3>

      <div className="mt-6 p-6 sm:p-6 bg-gray-800 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SummaryCard
            icon={<FaFileAlt className="text-white" />}
            text="Leave Applied"
            number={summary.leaveSummary.appliedFor}
          />
          <SummaryCard
            icon={<FaCheckCircle className="text-white" />}
            text="Leave Approved"
            number={summary.leaveSummary.approved}
          />
          <SummaryCard
            icon={<FaHourglassHalf className="text-white" />}
            text="Leave Pending"
            number={summary.leaveSummary.pending}
          />
          <SummaryCard
            icon={<FaTimesCircle className="text-white" />}
            text="Leave Rejected"
            number={summary.leaveSummary.rejected}
          />
        </div>

        <div className="flex justify-center mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
            <SummaryCard
              icon={<FaUsers className="text-white" />}
              text="Total Construction Workers"
              number={summary.totalWorkers}
            />
            <SummaryCard
              icon={<FaBuilding className="text-white" />}
              text="Available Construction Sites"
              number={summary.totalSites}
            />
          </div>
        </div>

        <div className="mt-6">
          <WorkerSalaryGraph />
        </div>
      </div>
    </div>
  );
};

export default ManagerOverview;
