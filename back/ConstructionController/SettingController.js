import ConstructionUser from "../Models/ConstructionUser.js";
import bcrypt from "bcryptjs";

const changePassword = async (req, res) => {
    try{
        const {userId, oldPassword, newPassword} = req.body;

        const user = await ConstructionUser.findById({_id: userId})
        if(!user) {
            return res.status(400).json({success: false, error: 'User not found'});
        }

        const isMatch = await bcrypt.compare(oldPassword, user.password)
        if(!isMatch) {
            return res.status(400).json({success: false, error: 'Wrong old password'});
        }

        const hashPassword = await bcrypt.hash(newPassword, 10)
        const newUser = await ConstructionUser.findByIdAndUpdate({_id: userId}, {password: hashPassword})

        return res.status(200).json({success: true, message: 'Password changed successfully'})

    } catch(error) {
        return res.status(400).json({success: false, error: 'setting error'});
    }
}


export {changePassword}