import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { columns, WorkerButtons } from '../../Utilities/WorkerHelper.jsx'
import axios from 'axios'
import DataTable from 'react-data-table-component'

const List = () => {
    const [workers, setWorkers] = useState([])
    const [workLoading, setWorkLoading] = useState(false)
    const [searchWorker, setSearchWorker] = useState()

    useEffect(() => {
        const fetchWorkers = async () => {
            setWorkLoading(true)
            try {
                const response = await axios.get('http://localhost:5000/api/worker', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                console.log("API Response: ", response.data);
                if (response.data.success) {
                    let sno = 1;
                    const data = response.data.workers.map((work) => ({
                        _id: work._id,
                        sno: sno++,
                        site_name: work.site ? work.site.site_name : "No Sites",
                        name: work.userId ? work.userId.name : "Unknown",
                        dob: work.dob ? new Date(work.dob).toLocaleDateString() : "N/A",
                        action: <WorkerButtons _id={work._id} />,
                    }));
    
                    console.log("Formatted Worker Data: ", data);
    
                    setWorkers(data);
                    setSearchWorker(data);
                }
                console.log(response.data.workers);
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            } finally {
                setWorkLoading(false)
            }
        };
        fetchWorkers();
    }, [])


    const customStyles = {
        rows: {
            style: {
                backgroundColor: "#1F2937",
                color: "#FFFFFF",
            },
        },
        headRow: {
            style: {
                backgroundColor: "#1F2937",
                color: "#FFFFFF",
                fontSize: "0.875rem",
                fontWeight: "600",
            },
        },
        pagination: {
            style: {
                backgroundColor: "#1F2937",
                color: "#FFFFFF",
            },
        },
    };

    const handleFilter = (e) => {
        const records = workers.filter((work) => {
            return work.name.toLowerCase().includes(e.target.value.toLowerCase());
        })
        setSearchWorker(records)
    }




    return (
        <>
            {workLoading ? (
                <div className="flex justify-center items-center h-64 text-white">
                    Loading...
                </div>
            ) : (
                <div className='p-6 bg-gray-900 text-white'>
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold">Manage Construction Workers</h3>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <input
                            type="text"
                            onChange={handleFilter}
                            placeholder="Search sites..."
                            className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-black-500 text-white"
                        />

                        <Link
                            to="/manager-dashboard/add-worker"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Add New Worker
                        </Link>
                    </div>
                    <div>
                        <DataTable
                            columns={columns}
                            data={searchWorker}
                            customStyles={customStyles}
                            pagination
                            highlightOnHover
                            responsive />
                    </div>
                </div>
            )}
        </>
    )
}

export default List