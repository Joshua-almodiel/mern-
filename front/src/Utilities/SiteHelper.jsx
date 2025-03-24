import { useNavigate } from "react-router-dom"
import axios from "axios"


export const columns = [
    {
        name: "S no",
        selector: (row) => row.sno
    },
    {
        name: "Sites Name",
        selector: (row) => row.site_name,
        sortable: true
    },
    {
        name: "Address",
        selector: (row) => row.address,
    },
    {
        name: "Action",
        selector: (row) => row.action
    },
]

export const SiteButtons = ({ _id, onSiteDelete }) => {
    const navigate = useNavigate()
    const handleDelete = async (id) => {
        const confirm = window.confirm("Do you want to delete it?")
        if (confirm) {
            try {
                const responnse = await axios.delete(`http://localhost:5000/api/site/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                if (responnse.data.success) {
                    onSiteDelete()
                    navigate(0, { replace: true });
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            }
        }
    }
    return (
        <div>
            <div className="flex space-x-2">
                <button
                    className="px-4 py-2 bg-gray-900 text-blue-500 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => navigate(`/manager-dashboard/site/${_id}`)}
                >
                    Edit
                </button>

                <button
                    className="px-4 py-2 bg-gray-900 text-red-500 rounded-lg hover:bg-red-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    onClick={() => handleDelete(_id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
