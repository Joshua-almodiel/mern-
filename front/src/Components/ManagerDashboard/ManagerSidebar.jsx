import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBuilding, FaCalendarAlt, FaCogs, FaMoneyBillAlt, FaMoneyBillWave, FaTachometerAlt, FaUser, FaUsers } from 'react-icons/fa'
import { useAuth } from '../../Context/AuthContext.jsx'

const ManagerSidebar = () => {

  const { logout } = useAuth()


  return (
    <div className="fixed inset-y-0 flex flex-col bg-gray-800 text-white w-64">
      <div className="p-4 border-gray-700">
        <h3 className="text-lg text-center font-semibold">CW Management</h3>
      </div>
      <div className="flex flex-col p-8 space-y-6">

        <NavLink
          to="/manager-dashboard"
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          } end
        >
          <FaTachometerAlt className="mr-2" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/manager-dashboard/sites"
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaBuilding className="mr-2" />
          <span>Construction Sites</span>
        </NavLink>

        <NavLink
          to="/manager-dashboard/workers"
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaUsers className="mr-2" />
          <span>Workers</span>
        </NavLink>

        <NavLink
          to="/manager-dashboard/leaves"
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaCalendarAlt className="mr-2" />
          <span>Leave</span>
        </NavLink>

        <NavLink
          to="/manager-dashboard/salary/add"
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaMoneyBillWave className="mr-2" />
          <span>Salary</span>
        </NavLink>

        <NavLink
          to="/manager-dashboard/setting"
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaCogs className="mr-2" />
          <span>Settings</span>
        </NavLink>


        <div className='m-2'>
          <button className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition duration-200" onClick={logout}>
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default ManagerSidebar
