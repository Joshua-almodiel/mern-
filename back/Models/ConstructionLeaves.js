import mongoose from "mongoose";
import { Schema } from "mongoose";

const constructionLeaveSchema = new Schema({
    workerId: {type: Schema.Types.ObjectId, ref: "ConstructionWorkers", required: true},
    leaveType: {type: String, enum: ["Sick Leave", "Casual Leave", "Annual Leave"], required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    reason: {type: String, required: true},
    status: {type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending"},
    appliedAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const ConstructionLeaves = mongoose.model("ConstructionLeaves", constructionLeaveSchema);
export default ConstructionLeaves;