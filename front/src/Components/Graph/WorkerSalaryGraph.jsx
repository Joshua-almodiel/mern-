import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const WorkerSalaryGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/dashboard/worker-salary-stats", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                if (response.data.success) {
                    setData([
                        { name: "Workers", value: response.data.totalWorkers },
                        { name: "All Added Salary", value: response.data.totalSalary },
                    ]);
                }
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="m-4 p-3 bg-gray-900 text-white rounded-lg shadow-md overflow-hidden">
            <h3 className="text-xl text-center font-semibold mb-4">Workers and Salary Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                    <XAxis 
                        dataKey="name" 
                        stroke="#CBD5E0" 
                        tick={{ fill: '#CBD5E0' }} 
                        axisLine={{ stroke: '#4A5568' }}
                    />
                    <YAxis 
                        stroke="#CBD5E0" 
                        tick={{ fill: '#CBD5E0' }} 
                        axisLine={{ stroke: '#4A5568' }}
                    />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: '#2D3748', 
                            border: '1px solid #4A5568', 
                            borderRadius: '8px', 
                            color: '#CBD5E0' 
                        }}
                    />
                    <Bar 
                        dataKey="value" 
                        fill="#6B46C1" 
                        radius={[5, 5, 0, 0]} 
                        barSize={40} 
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WorkerSalaryGraph;