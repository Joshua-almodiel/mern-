
import ConstructionLeaves from "../Models/ConstructionLeaves.js";
import ConstructionWorkers from "../Models/ConstructionWorkers.js";

const addLeave = async (req, res) => {
    try {
        const { userId, leaveType, startDate, endDate, reason } = req.body;
        const worker = await ConstructionWorkers.findOne({ userId });

        const newLeave = new ConstructionLeaves({
            workerId: worker._id, leaveType, startDate, endDate, reason
        })

        await newLeave.save()

        return res.status(200).json({ success: true })

    } catch (error) {
        return res.status(400).json({ success: false, error: "Leave add server error" })
    }

}

const getLeave = async (req, res) => {
    try {
        const { id, role } = req.params;
        let leaves
        if(role === "manager"){
            leaves = await ConstructionLeaves.find({ workerId: id })
        } else {
            const worker = await ConstructionWorkers.findOne({ userId: id })
            leaves = await ConstructionLeaves.find({ workerId: worker._id })
        }

        return res.status(200).json({ success: true, leaves })

    } catch (error) {
        return res.status(400).json({ success: false, error: "Leave add server error" })
    }
}

const getLeaves = async (req, res) => {
    try {
        const leaves = await ConstructionLeaves.find().populate({
            path: "workerId",
            populate: [
                {
                    path: 'site',
                    select: 'site_name'
                },
                {
                    path: 'userId',
                    select: 'name'
                }
            ]
        });

        console.log(leaves)

        return res.status(200).json({ success: true, leaves })

    } catch (error) {
        return res.status(400).json({ success: false, error: "Leave get server error" })
    }
}

const getLeaveDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const leave = await ConstructionLeaves.findById({ _id: id }).populate({
            path: "workerId",
            populate: [
                {
                    path: 'site',
                    select: 'site_name'
                },
                {
                    path: 'userId',
                    select: 'name'
                }
            ]
        });

        return res.status(200).json({ success: true, leave })

    } catch (error) {
        return res.status(400).json({ success: false, error: "Leave get server error" })
    }
}

const updateLeave = async (req, res) => {
    try {
        const { id } = req.params;
        const leave = await ConstructionLeaves.findByIdAndUpdate({ _id: id }, { status: req.body.status });
        if (!leave) {
            return res.status(400).json({ success: false, error: "Leave not found" })
        }
        return res.status(200).json({ success: true })
    } catch (error) {
        return res.status(400).json({ success: false, error: "Leave add server error" })
    }
}

export { addLeave, getLeave, getLeaves, getLeaveDetail, updateLeave }