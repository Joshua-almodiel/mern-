import mongoose from "mongoose";
import ConstructionWorkers from "./ConstructionWorkers.js";
import ConstructionLeaves from "./ConstructionLeaves.js";
import ConstructionSalaries from "./ConstructionSalaries.js";
import ConstructionUser from "./ConstructionUser.js";

const siteSchema = new mongoose.Schema({
    site_name: { type: String, required: true },
    address: { type: String },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

siteSchema.pre("deleteOne", { document: true, query: false }, async function (next) {
    try {
        const workers = await ConstructionWorkers.find({ site: this._id });
        const workerIds = workers.map((worker) => worker._id);

        await ConstructionWorkers.deleteMany({ site: this._id });

        await ConstructionLeaves.deleteMany({ workerId: { $in: workerIds } });

        await ConstructionSalaries.deleteMany({ workerId: { $in: workerIds } });

        await ConstructionUser.deleteMany({ userId: this._id });

        next();
    } catch (error) {
        next(error);
    }
});

const Site = mongoose.model("Site", siteSchema);
export default Site;