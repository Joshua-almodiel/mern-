import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns, SiteButtons } from "../../Utilities/SiteHelper.jsx"
import axios from "axios";

const SiteList = () => {
  const [sites, setSites] = useState([])
  const [siteLoading, setSiteLoading] = useState(false)
  const [searchSite, setSearchSite] = useState()

  const onSiteDelete = () => {
    fetchSites();
  }

  const fetchSites = async () => {
    setSiteLoading(true)
    try {
      const response = await axios.get('http://localhost:5000/api/site', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      if (response.data.success) {
        let sno = 1;
        const data = await response.data.sites.map((site) => (
          {
            _id: site._id,
            sno: sno++,
            site_name: site.site_name,
            address: site.address,
            action: (<SiteButtons _id={site._id} onSiteDelete={onSiteDelete}/>)
          }
        ));
        setSites(data);
        setSearchSite(data);
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error)
      }
    } finally {
      setSiteLoading(false)
    }
  };

  useEffect(() => {
    fetchSites();
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


  const searchSites = (e) => {
    const records = sites.filter((site) => site.site_name.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchSite(records)
  }

  return (
    <>
      {siteLoading ? (
        <div className="flex justify-center items-center h-64 text-white">
          Loading...
        </div>
      ) : (
        <div className="p-6 bg-gray-900 text-white">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Manage Sites</h3>
          </div>

          <div className="flex items-center justify-between mb-6">
            <input
              type="text"
              placeholder="Search sites..."
              onChange={searchSites}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-black-500 text-white"
            />

            <Link
              to="/manager-dashboard/add-site"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Add New Sites
            </Link>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <DataTable
              columns={columns}
              data={searchSite}
              customStyles={customStyles}
              pagination
              highlightOnHover
              responsive
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SiteList;
