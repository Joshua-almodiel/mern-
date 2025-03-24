import React from 'react'
import { useNavigate } from 'react-router-dom'


export const columns = [
    {
      name: "S no",
      selector: (row) => row.sno,
      width: "100px", 
    },
    {
      name: "Worker ID",
      selector: (row) => row.workerId,
      width: "150px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      width: "160px",
    },
    {
      name: "Leave Type",
      selector: (row) => row.leaveType,
      width: "150px",
    },
    {
      name: "Sites",
      selector: (row) => row.site,
      width: "170px",
    },
    {
      name: "Days",
      selector: (row) => row.days,
      width: "120px", 
    },
    {
      name: "Status",
      selector: (row) => row.status,
      width: "130px", 
    },
    {
      name: "Action",
      selector: (row) => row.action,
      width: "150px",
    },
  ];


export const LeaveButtons = ({_id}) => {

    const navigate = useNavigate()

    const handleView = (id) => {
        navigate(`/manager-dashboard/leaves/${id}`)
    }

  return (
    <div className="flex space-x-2">
        <button className="px-4 py-2 bg-gray-900 text-blue-500 rounded-lg hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => handleView(_id)}>
            View
        </button>
    </div>
  )
}