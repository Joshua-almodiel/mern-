
import ConstructionWorkers from "../Models/ConstructionWorkers.js";
import ConstructionSalaries from "../Models/ConstructionSalaries.js";

const addSalary = async (req, res) => {

    try {
        const { workerId, basicSalary, bunos, advanceSalary, payDate } = req.body;

        const totalSalary = parseInt(basicSalary) + parseInt(bunos) - parseInt(advanceSalary)

        const newSalary = new ConstructionSalaries({
            workerId,
            basicSalary,
            bunos,
            advanceSalary,
            netSalary: totalSalary,
            payDate
        })

        await newSalary.save()

        return res.status(200).json({ success: true })

    } catch (error) {
        return res.status(400).json({ success: false, error: "salary add server error" })
    }

}

const getSalary = async (req, res) => {
    try {
        const {id, role} = req.params;

        let salary
        if(role === "manager"){
            salary = await ConstructionSalaries.find({workerId: id}).populate('workerId', 'workerId')
        } else {
            const worker = await ConstructionWorkers.findOne({userId: id})
            salary = await ConstructionSalaries.find({workerId: worker._id}).populate('workerId', 'workerId')
            console.log(salary)
        }

        return res.status(200).json({success: true, salary})
    } catch (error) {
        return res.status(400).json({ success: false, error: "salary get server error" })
    } 
}

export { addSalary, getSalary }