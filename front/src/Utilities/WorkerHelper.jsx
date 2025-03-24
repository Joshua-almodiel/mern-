import axios from "axios";
import { useNavigate } from "react-router-dom";


export const columns = [
    {
        name: "S no",
        selector: (row) => row.sno,
        width: "135px",
    },
    {
        name: "Name",
        selector: (row) => row.name,
        width: "250px",
    },
    {
        name: "Sites",
        selector: (row) => row.site_name,
        width: "175px",
    },
    {
        name: "DOB",
        selector: (row) => row.dob,
        sortable: true,
        width: "190px",
    },
    {
        name: "Action",
        selector: (row) => row.action,
        center: true,
    },
]

export const fetchSites = async () => {
    let sites;
    try {
        const response = await axios.get('http://localhost:5000/api/site', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        if (response.data.success) {
            sites = response.data.sites
        }
    } catch (error) {
        if (error.response && !error.response.data.success) {
            alert(error.response.data.error)
        }
    }
    return sites
};


export const getWorkers = async (id) => {
    let workers;
    try {
        const response = await axios.get(`http://localhost:5000/api/worker/site/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        if (response.data.success) {
            return response.data.workers
        }
    } catch (error) {
        if (error.response && !error.response.data.success) {
            alert(error.response.data.error)
        }
    }
    return workers
};

export const WorkerButtons = ({ _id }) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-900 text-blue-500 rounded-lg hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => navigate(`/manager-dashboard/workers/${_id}`)}>View</button>
                <button className="px-4 py-2 bg-gray-900 text-blue-500 rounded-lg hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => navigate(`/manager-dashboard/workers/edit/${_id}`)}>Edit</button>
                <button className="px-4 py-2 bg-gray-900 text-blue-500 rounded-lg hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => navigate(`/manager-dashboard/workers/salary/${_id}`)}>Salary</button>
                <button className="px-4 py-2 bg-gray-900 text-red-500 rounded-lg hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => navigate(`/manager-dashboard/workers/leaves/${_id}`)}>Leave</button>
            </div>
        </div>
    )
}