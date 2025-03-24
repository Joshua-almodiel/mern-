import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {
    FaUser,
    FaIdCard,
    FaCalendarAlt,
    FaHardHat,
    FaInfoCircle,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

const DetailsLeave = () => {
    const { id } = useParams()
    const [leave, setLeave] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchLeaves = async () => {
            try {
                const responnse = await axios.get(`http://localhost:5000/api/leave/detail/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                if (responnse.data.success) {
                    setLeave(responnse.data.leave)
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            }
        };
        fetchLeaves();
    }, []);


    const changeStatus = async (id, status) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/leave/${id}`, { status },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                })
            if (response.data.success) {
                navigate('/manager-dashboard/leaves')
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error)
            }
        }
    }

    if (!leave) {
        return <div className="p-6 bg-gray-900 text-white">Loading...</div>;
    }

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <h2 className="text-2xl font-semibold mb-6">Leave Details</h2>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaUser className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Name</p>
                                    <p className="text-lg font-semibold">{leave.workerId.userId.name}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaIdCard className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Construction Worker ID</p>
                                    <p className="text-lg font-semibold">{leave.workerId.workerId}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaInfoCircle className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Leave Type</p>
                                    <p className="text-lg font-semibold">{leave.leaveType}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaInfoCircle className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Reason</p>
                                    <p className="text-lg font-semibold">{leave.reason}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHardHat className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Site</p>
                                    <p className="text-lg font-semibold">{leave.workerId.site.site_name}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaCalendarAlt className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Start Date</p>
                                    <p className="text-lg font-semibold">
                                        {new Date(leave.startDate).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaCalendarAlt className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">End Date</p>
                                    <p className="text-lg font-semibold">
                                        {new Date(leave.endDate).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                {leave.status === "Pending" ? (
                                    <>
                                        <button
                                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                                            onClick={() => changeStatus(leave._id, "Approved")}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                                            onClick={() => changeStatus(leave._id, "Rejected")}
                                        >
                                            Reject
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <FaCheckCircle className="text-2xl text-white" />
                                        <div>
                                            <p className="text-sm text-gray-200">Status</p>
                                            <p className="text-lg font-semibold">{leave.status}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsLeave