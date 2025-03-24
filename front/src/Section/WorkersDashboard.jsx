import React from 'react'
import Sidebar from '../Components/WorkerDashboard/Sidebar.jsx'
import NavBar from '../Components/ManagerDashboard/Navbar.jsx'
import { Outlet } from 'react-router-dom'

const WorkersDashboard = () => {

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 ml-64 bg-gray-900 text-white h-screen">
                <NavBar />
                <Outlet />
            </div>
        </div>
    )
}

export default WorkersDashboard
