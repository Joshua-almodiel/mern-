import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext.jsx";

const List = () => {
    const [leaves, setLeaves] = useState([]);
    const [loading, setLoading] = useState(true);
    let sno = 1;
    const { id } = useParams();
    const { user } = useAuth();

    const fetchLeaves = async () => {
        try {
            setLoading(true);
            console.log("Fetching leaves for ID:", id);
            const response = await axios.get(`https://mern-topaz-eta.vercel.app/api/leave/${id}/${user.role}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });

            console.log("API Response: ", response.data);

            if (response.data.success) {
                setLeaves(response.data.leaves);
            }
        } catch (error) {
            alert(error.response?.data?.error || "Failed to fetch leaves");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeaves();
    }, []);

    return (
        <div className="p-6 bg-gray-900 text-white w-full overflow-hidden">
            <div className="mb-6">
                <h3 className="text-2xl font-semibold">Manage Workers Leaves</h3>
            </div>

            <div className="flex items-center justify-between mb-6">
                {user.role === "worker" && (
                    <Link
                        to="/worker-dashboard/add-leave"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Appy for leave
                    </Link>
                )}
            </div>

            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                        <p className="mt-2">Loading leaves...</p>
                    </div>
                ) : leaves.length > 0 ? (
                    <table className="w-full">
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="px-4 py-2 text-left">ID</th>
                                <th className="px-4 py-2 text-left">Leave Type</th>
                                <th className="px-4 py-2 text-left">From</th>
                                <th className="px-4 py-2 text-left">To</th>
                                <th className="px-4 py-2 text-left">Description</th>
                                <th className="px-4 py-2 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaves.map((leave) => (
                                <tr key={leave._id} className="border-b border-gray-700 hover:bg-gray-700 transition duration-200">
                                    <td className="px-4 py-2">{sno++}</td>
                                    <td className="px-4 py-2">{leave.leaveType}</td>
                                    <td className="px-4 py-2">{new Date(leave.startDate).toLocaleDateString()}</td>
                                    <td className="px-4 py-2">{new Date(leave.endDate).toLocaleDateString()}</td>
                                    <td className="px-4 py-2">{leave.reason}</td>
                                    <td className={`px-4 py-2 font-semibold ${
                                        leave.status === 'approved' ? 'text-green-400' :
                                        leave.status === 'rejected' ? 'text-red-400' :
                                        'text-yellow-400'
                                    }`}>
                                        {leave.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
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
                        <h3 className="mt-4 text-lg font-medium text-gray-300">No Leaves Found</h3>
                        <p className="mt-1 text-gray-400">
                            {user.role === "worker"
                                ? "You haven't applied for any leaves yet."
                                : "This worker hasn't applied for any leaves yet."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default List;