import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBuilding, FaCalendarAlt, FaCogs, FaMoneyBillAlt, FaMoneyBillWave, FaTachometerAlt, FaUser, FaUsers } from 'react-icons/fa'
import { useAuth } from '../../Context/AuthContext.jsx'

const Sidebar = () => {

  const { user, logout } = useAuth()



  return (
    <div className="fixed inset-y-0 flex flex-col bg-gray-800 text-white w-64">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold">Construction Worker MS</h3>
      </div>
      <div className="flex flex-col p-2 space-y-2">

        <NavLink
          to="/worker-dashboard"
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          } end
        >
          <FaTachometerAlt className="mr-2" />
          <span>Worker Dashboard</span>
        </NavLink>

        <NavLink
          to={`/worker-dashboard/profile/${user._id}`}
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaUsers className="mr-2" />
          <span>My Profile</span>
        </NavLink>

        <NavLink
          to={`/worker-dashboard/leaves/${user._id}`}
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaBuilding className="mr-2" />
          <span>Leaves</span>
        </NavLink>

        <NavLink
          to={`/worker-dashboard/salary/${user._id}`}
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaCalendarAlt className="mr-2" />
          <span>Salary</span>
        </NavLink>

        <NavLink
          to="/worker-dashboard/setting"
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

export default Sidebar
