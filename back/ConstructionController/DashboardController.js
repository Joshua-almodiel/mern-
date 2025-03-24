import Site from "../Models/Site.js"
import ConstructionWorkers from "../Models/ConstructionWorkers.js"
import ConstructionLeaves from "../Models/ConstructionLeaves.js"
import ConstructionSalaries from "../Models/ConstructionSalaries.js";

const getSummary = async (req, res) => {
    try{
        const totalWorkers = await ConstructionWorkers.countDocuments()

        const totalSites = await Site.countDocuments()

        const totalSalaries = await ConstructionWorkers.aggregate([
            {$group: {_id: null, totalSalary: {$sum : "$salary"}}}
        ])

        const workerAppliedForLeave = await ConstructionLeaves.distinct('workerId')

        const leaveStatus = await ConstructionLeaves.aggregate([
            {$group: {
                _id: "$status",
                count: {$sum: 1}
            }}
        ])

        const leaveSummary = {
            appliedFor: workerAppliedForLeave.length,
            approved: leaveStatus.find(item => item._id === "Approved")?.count || 0,
            rejected: leaveStatus.find(item => item._id === "Rejected")?.count || 0,
            pending: leaveStatus.find(item => item._id === "Pending")?.count || 0,
        }

        return res.status(200).json({
            success: true,
            totalWorkers,
            totalSites,
            totalSalary: totalSalaries[0]?.totalSalary || 0,
            leaveSummary
        })

    } catch(error) {
        return res.status(500).json({success: false, error: "dashboard summary error"})
    }
}



const getWorkerAndSalaryStats = async (req, res) => {
    try {
        const totalWorkers = await ConstructionWorkers.countDocuments();
        const totalSalary = await ConstructionSalaries.aggregate([
            { $group: { _id: null, total: { $sum: "$netSalary" } } },
        ]);

        res.status(200).json({
            success: true,
            totalWorkers,
            totalSalary: totalSalary[0]?.total || 0,
        });
    } catch (error) {
        res.status(500).json({ success: false, error: "Error fetching stats" });
    }
};





export {getSummary,getWorkerAndSalaryStats}