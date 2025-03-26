import React, { useEffect, useState } from "react";
import { fetchSites } from "../../Utilities/WorkerHelper.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const Edit = () => {
    const [worker, setWorker] = useState({
        name: '',
        maritalStatus: '',
        nationality: '',
        salary: 0,
        site: '',
    });
    const [sites, setSites] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams()



    useEffect(() => {
        const getSites = async () => {
            const sites = await fetchSites()
            setSites(sites)
        }

        getSites()
    }, [])


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
                    const worker = responnse.data.worker;
                    setWorker((prev) => ({ ...prev, name: worker.userId.name, maritalStatus: worker.maritalStatus, nationality: worker.nationality, salary: worker.salary, site: worker.site }))
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            }
        };
        fetchWorkers();
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorker((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(worker)
        try {
            const response = await axios.put(`https://mern-topaz-eta.vercel.app/api/worker/${id}`, worker, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            })
            console.log(response.data)
            if (response.data.success) {
                navigate("/manager-dashboard/workers")
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error)
            }
        }
    }


    return (
        <>{sites && worker ? (
            <div className="p-6 bg-gray-900 text-white">
                <h2 className="text-2xl font-semibold mb-6">Edit Worker</h2>
                <form className="bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={worker.name}
                                placeholder="Enter Name"
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                required
                            />
                        </div>


                        <div>
                            <label htmlFor="maritalStatus" className="block text-sm font-medium mb-2">
                                Marital Status
                            </label>
                            <select
                                name="maritalStatus"
                                value={worker.maritalStatus}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="single">Single</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                                <option value="separated">Separated</option>
                                <option value="engaged">Engaged</option>
                                <option value="commonlaw">Common-law</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="nationality" className="block text-sm font-medium mb-2">
                                Nationality
                            </label>
                            <input
                                type="text"
                                name="nationality"
                                value={worker.nationality}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="salary" className="block text-sm font-medium mb-2">
                                Salary
                            </label>
                            <input
                                type="number"
                                name="salary"
                                value={worker.salary}
                                placeholder="Salary"
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="site" className="block text-sm font-medium mb-2">
                                Sites
                            </label>
                            <select
                                name="site"
                                value={worker.site}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                required
                            >
                                <option value="">Select site</option>
                                {sites.map(site => (
                                    <option key={site._id} value={site._id}>{site.site_name}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Edit Worker
                        </button>
                    </div>
                </form>
            </div>
        ) : <div className="p-8 text-center">
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
        <h3 className="mt-4 text-lg font-medium text-gray-300">
          Loading Worker...
        </h3>
      </div>}</>
    );
};

export default Edit;