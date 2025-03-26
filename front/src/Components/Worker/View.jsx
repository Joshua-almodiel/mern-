import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
    FaUser,
    FaIdCard,
    FaBirthdayCake,
    FaVenusMars,
    FaHardHat,
    FaHeart,
} from "react-icons/fa";


const View = () => {
    const { id } = useParams()
    const [worker, setWorker] = useState(null)

    useEffect(() => {
        const fetchWorkers = async () => {
            try {
                const responnse = await axios.get(`https://mern-topaz-eta.vercel.app/api/worker/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                if (responnse.data.success) {
                    setWorker(responnse.data.worker)
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            }
        };
        fetchWorkers();
    });

    if (!worker) {
        return <div className="p-6 bg-gray-900 text-white">Loading...</div>;
    }

    return (
        <div className="p-6 bg-gray-900 text-white">
            <h2 className="text-2xl font-semibold mb-6">Construction Worker Details</h2>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaUser className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Name</p>
                                    <p className="text-lg font-semibold">{worker.userId.name}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaIdCard className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Worker ID</p>
                                    <p className="text-lg font-semibold">{worker.workerId}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaBirthdayCake className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Date of Birth</p>
                                    <p className="text-lg font-semibold">
                                        {new Date(worker.dob).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaVenusMars className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Gender</p>
                                    <p className="text-lg font-semibold">{worker.gender}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHardHat className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Site</p>
                                    <p className="text-lg font-semibold">{worker.site.site_name}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Marital Status</p>
                                    <p className="text-lg font-semibold">{worker.maritalStatus}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default View