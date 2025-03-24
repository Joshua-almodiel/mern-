import mongoose from "mongoose";

const constructionUserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    site: { type: mongoose.Schema.Types.ObjectId, ref: "Site"},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['manager', 'worker'], require: true},
    createAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const ConstructionUser = mongoose.model("ConstructionUser", constructionUserSchema)
export default ConstructionUser;

//code file 3