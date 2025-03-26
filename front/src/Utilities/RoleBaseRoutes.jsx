import React from 'react'
import { useAuth } from '../Context/AuthContext.jsx'
import { Navigate } from 'react-router-dom'

const RoleBaseRoutes = ({children, requiredRole}) => {
    const {user, loading} = useAuth()

    if(loading) {
        return <div className='text-center'>Loading ....</div>
    }
    
    if(!requiredRole.includes(user.role)){
        <Navigate to="/unauthorized" />
    }

    return user ? children : <Navigate to="/login" />


}

export default RoleBaseRoutes
