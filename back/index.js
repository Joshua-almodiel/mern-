import express from 'express'
import cors from 'cors'
import UserRouter from './ConstructionRouter/UserRouter.js'
import SiteRouter from './ConstructionRouter/SiteRouter.js'
import WorkerRouter from './ConstructionRouter/Worker.js'
import connectToDatabase from './DB/ConstructionDatabase.js'
import SalaryRouter from './ConstructionRouter/Salary.js'
import LeaveRouter from './ConstructionRouter/Leave.js'
import SettingRouter from './ConstructionRouter/SettingRouter.js'
import DashboardRouter from './ConstructionRouter/DashboardRouter.js'

connectToDatabase()
const app = express()
app.use(cors({
    origin: "https://mern-cwms.vercel.app",
    credentials: true
}))
app.use(express.json())
app.use('/api/auth', UserRouter)
app.use('/api/site', SiteRouter)
app.use('/api/worker', WorkerRouter)
app.use('/api/salary', SalaryRouter)
app.use('/api/leave', LeaveRouter)
app.use('/api/setting', SettingRouter)
app.use('/api/dashboard', DashboardRouter)




app.listen(process.env.PORT, () => {
    console.log(`Server is running.. on PORT ${process.env.PORT}`)
})
