import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns, SiteButtons } from "../../Utilities/SiteHelper.jsx";
import axios from "axios";

const SiteList = () => {
  const [sites, setSites] = useState([]);
  const [searchSite, setSearchSite] = useState();

  const noRecords = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    color: "white",
    backgroundColor: "#1F2937",
    fontSize: "1.5rem",
    fontWeight: "500",
    padding: "2rem",
    borderRadius: "0.5rem",
  };

  const onSiteDelete = () => {
    fetchSites();
  };

  const fetchSites = async () => {
    try {
      const response = await axios.get(
        "https://mern-topaz-eta.vercel.app/api/site",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        let sno = 1;
        const data = await response.data.sites.map((site) => ({
          _id: site._id,
          sno: sno++,
          site_name: site.site_name,
          address: site.address,
          action: <SiteButtons _id={site._id} onSiteDelete={onSiteDelete} />,
        }));
        setSites(data);
        setSearchSite(data);
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    fetchSites();
  }, []);

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
    const records = sites.filter((site) =>
      site.site_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchSite(records);
  };

  return (
    <>
      {searchSite ? (
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
            {searchSite.length > 0 ? (
              <DataTable
                columns={columns}
                data={searchSite}
                customStyles={customStyles}
                pagination
                highlightOnHover
                responsive
              />
            ) : (
              <div style={noRecords}>No Records Found</div>
            )}
          </div>
        </div>
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
          <h3 className="mt-4 text-lg font-medium text-gray-300">
            No Sites Right Now
          </h3>
        </div>
      )}
    </>
  );
};

export default SiteList;
