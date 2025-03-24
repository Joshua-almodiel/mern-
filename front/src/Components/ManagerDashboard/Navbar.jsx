import React from 'react'
import { useAuth } from '../../Context/AuthContext.jsx'

const NavBar = () => {
    const { user } = useAuth()

    return (
        <div className="flex justify-between items-center h-12 bg-gray-700 px-4 border-b border-gray-600">
            <p className="text-white font-medium">Welcome, {user.name}</p>
            
        </div>
    )
}

export default NavBar
