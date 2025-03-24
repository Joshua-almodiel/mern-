
import ConstructionUser from './Models/ConstructionUser.js'
import bcrypt from 'bcryptjs'
import connectToDatabase from './DB/ConstructionDatabase.js'
const userRegister = async () => {
    connectToDatabase()
    try{
        const hashPassword = await bcrypt.hash("manager", 10)
        const newUser = new ConstructionUser({
            name: "Manager",
            email: "manager@gmail.com",
            password: hashPassword,
            role: "manager"
        })
        await newUser.save()
    } catch {
        console.log(err)
    }
}


userRegister(); 