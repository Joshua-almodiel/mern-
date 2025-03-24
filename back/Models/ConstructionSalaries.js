import mongoose from "mongoose";
import { Schema } from "mongoose";

const constructionSalarySchema = new Schema({
    workerId: {type: Schema.Types.ObjectId, ref: 'ConstructionWorkers', required: true},
    basicSalary: {type: Number, required: true},
    bunos: {type: Number},
    advanceSalary: {type: Number},
    netSalary: {type: Number},
    payDate: {type: Date, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const ConstructionSalaries = mongoose.model('ConstructionSalaries', constructionSalarySchema);
export default ConstructionSalaries;