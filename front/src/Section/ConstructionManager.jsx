import React from 'react'
import ManagerSidebar from '../Components/ManagerDashboard/ManagerSidebar.jsx'
import NavBar from '../Components/ManagerDashboard/Navbar.jsx'
import { Outlet } from 'react-router-dom'


const ConstructionManager = () => {

  return (
    <div className="flex min-h-screen">
      <ManagerSidebar />
      <div className="flex-1 ml-64 bg-gray-900 text-white h-screen">
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}

export default ConstructionManager
