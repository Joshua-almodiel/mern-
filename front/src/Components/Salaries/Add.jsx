import React, { useEffect, useState } from "react";
import { fetchSites, getWorkers } from '../../Utilities/WorkerHelper.jsx';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Add = () => {
    const [salary, setSalary] = useState({
        workerId: null,
        basicSalary: 0,
        bunos: 0,
        advanceSalary: 0,
        payDate: null
    });
    const [sites, setSites] = useState(null);
    const [workers, setWorkers] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        const getSites = async () => {
            const sites = await fetchSites()
            setSites(sites)
        }

        getSites()
    }, [])

    const handleSite = async (e) => {
        const siteId = e.target.value;
        if (!siteId) {
            setWorkers([]);
            return;
        }
        
        try {
            const works = await getWorkers(siteId);
            setWorkers(works);
            setSalary(prev => ({ ...prev, workerId: null }));
        } catch (error) {
            console.error("Failed to fetch workers:", error);
            setWorkers([]);
        }
    }



    const handleChange = (e) => {
        const { name, value } = e.target;
        setSalary((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`https://mern-topaz-eta.vercel.app/api/salary/add`, salary, {
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
        <>{sites ? (
            <div className="p-6 bg-gray-900 text-white">
                <h2 className="text-2xl font-semibold mb-6">Add Salary</h2>
                <form className="bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <div>
                            <label htmlFor="site" className="block text-sm font-medium mb-2">
                                Sites
                            </label>
                            <select
                                name="site"
                                onChange={handleSite}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                required
                            >
                                <option value="">Select Sites</option>
                                {sites.map(site => (
                                    <option key={site._id} value={site._id}>{site.site_name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="worker" className="block text-sm font-medium mb-2">
                                Construction Worker ID
                            </label>
                            <select
                                name="workerId"
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                required
                            >
                                <option value="">Select Workers</option>
                                {workers.map(work => (
                                    <option key={work._id} value={work._id}>{work.workerId}</option>
                                ))}
                            </select>
                        </div>


                        <div>
                            <label htmlFor="basicSalary" className="block text-sm font-medium mb-2">
                                Basic Salary
                            </label>
                            <input
                                type="number"
                                name="basicSalary"
                                onChange={handleChange}
                                placeholder="Basic Salary"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="allowances" className="block text-sm font-medium mb-2">
                                Bunos
                            </label>
                            <input
                                type="number"
                                name="bunos"
                                placeholder="Bunos"
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="advanceSalary" className="block text-sm font-medium mb-2">
                                Advance Salary
                            </label>
                            <input
                                type="number"
                                name="advanceSalary"
                                placeholder="Advance Salary"
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="payDate" className="block text-sm font-medium mb-2">
                                Pay Date
                            </label>
                            <input
                                type="date"
                                name="payDate"
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                required
                            />
                        </div>


                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Add Salary
                        </button>
                    </div>
                </form>
            </div>
        ) : <div className="p-6 bg-gray-900 text-white">Loading...</div>}</>
    );
};

export default Add;