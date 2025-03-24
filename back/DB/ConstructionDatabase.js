import mongoose from "mongoose";

const connectToDatabase = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
    } catch(err) {
        console.log(err)
    }
}

export default connectToDatabase;

//code file 5