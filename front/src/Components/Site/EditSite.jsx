import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditSite = () => {
    const [site, setSite] = useState([])
    const {id} = useParams()
    const [siteLoading, setSiteLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchSites = async () => {
            setSiteLoading(true)
            try {
                const responnse = await axios.get(`http://localhost:5000/api/site/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                if (responnse.data.success) {
                    setSite(responnse.data.site)
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            } finally {
                setSiteLoading(false)
            }
        };
        fetchSites();
    }, []);

    const handleChangeSite = (e) => {
        const { name, value } = e.target;
        setSite({ ...site, [name]: value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:5000/api/site/${id}`,
                site, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            })
            if (response.data.success) {
                navigate('/manager-dashboard/sites')
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error)

            }
        }
    }

    return (
        <>{siteLoading ? <div className="p-6 bg-gray-900 text-white">Loading...</div> :
            <div className="p-6 bg-gray-900 text-white">
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold">Edit Sites</h3>
                </div>

                <form className="bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="site_name" className="block text-sm font-medium mb-2">
                            Construction Site Name
                        </label>
                        <input
                            type="text"
                            name="site_name"
                            id="site_name"
                            value={site.site_name}
                            placeholder="Enter Sites Name"
                            onChange={handleChangeSite}
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="address" className="block text-sm font-medium mb-2">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={site.address}
                            placeholder="Address"
                            onChange={handleChangeSite}
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                            rows={2}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="description" className="block text-sm font-medium mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={site.description}
                            placeholder="Description"
                            onChange={handleChangeSite}
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                            rows={4}
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Edit Sites
                    </button>
                </form>
            </div>
        }</>
    )
}

export default EditSite
