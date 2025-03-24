
import ConstructionWorkers from "../Models/ConstructionWorkers.js"
import ConstructionUser from "../Models/ConstructionUser.js"
import bcrypt from "bcryptjs"

const addWorker = async (req, res) => {
    try {

        const {
            name,
            email,
            workerId,
            dob,
            gender,
            maritalStatus,
            nationality,
            site,
            salary,
            password,
            role,
        } = req.body;

        const user = await ConstructionUser.findOne({ email })
        if (user) {
            return res.status(400).json({ success: false, error: "Construction user already registered in site" })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new ConstructionUser({
            name,
            email,
            password: hashPassword,
            role,
        })
        const saveUser = await newUser.save()

        const newWorker = new ConstructionWorkers({
            userId: saveUser._id,
            workerId,
            dob,
            gender,
            maritalStatus,
            nationality,
            site,
            salary
        })
        await newWorker.save()
        return res.status(200).json({ success: true, message: "worker created" })

    } catch (error) {
        return res.status(500).json({ success: false, error: "server error in adding worker" })
    }
}

const getWorkers = async (req, res) => {
    try {
        const workers = await ConstructionWorkers.find().populate('userId', { password: 0 }).populate('site')
        return res.status(200).json({ success: true, workers })
    } catch (error) {
        return res.status(500).json({ success: false, error: "get workers server error" })
    }
}

const getWorker = async (req, res) => {
    const { id } = req.params;
    try {
        let worker;
        worker = await ConstructionWorkers.findById({ _id: id }).populate('userId', { password: 0 }).populate('site')
        if (!worker) {
            worker = await ConstructionWorkers.findOne({ userId: id }).populate('userId', { password: 0 }).populate('site')
        }
        return res.status(200).json({ success: true, worker })
    } catch (error) {
        return res.status(500).json({ success: false, error: "get workers server error" })
    }
}

const updateWorker = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name,
            maritalStatus,
            nationality,
            site,
            salary,
        } = req.body;

        const worker = await ConstructionWorkers.findById({ _id: id })
        if (!worker) {
            return res.status(404).json({ success: false, error: "worker not found" })
        }
        const user = await ConstructionUser.findById({ _id: worker.userId })
        if (!user) {
            return res.status(404).json({ success: false, error: "user not found" })
        }


        const updateUser = await ConstructionUser.findByIdAndUpdate({ _id: worker.userId }, { name })
        const updateWorker = await ConstructionWorkers.findByIdAndUpdate({ _id: id }, {
            maritalStatus,
            nationality,
            salary,
            site
        })

        if (!updateUser || !updateWorker) {
            return res.status(404).json({ success: false, error: "info not found" })
        }

        return res.status(200).json({ success: true, message: "worker updated successfully" })

    } catch (error) {
        return res.status(500).json({ success: false, error: "update workers server error" })
    }
}

const fetchWorkersBySiteId = async (req, res) => {
    const { id } = req.params;
    try {
        const workers = await ConstructionWorkers.find({ site: id })
        return res.status(200).json({ success: true, workers })
    } catch (error) {
        return res.status(500).json({ success: false, error: "get workersBySiteId server error" })
    }
}

export { addWorker, getWorkers, getWorker, updateWorker, fetchWorkersBySiteId }