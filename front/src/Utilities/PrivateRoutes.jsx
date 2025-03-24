import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()

    if(loading) {
        return <div className='text-center'>Loading .....</div>
    }

    return user ? children : <Navigate to="/login" />
}

export default PrivateRoutes
