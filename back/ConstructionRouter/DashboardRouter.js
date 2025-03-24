import express from 'express';
import ConstructionMiddleware from '../ConstructionMiddleware/ConstructionMiddleware.js';
import { getSummary, getWorkerAndSalaryStats } from '../ConstructionController/DashboardController.js';

const router = express.Router()

router.get('/summary', ConstructionMiddleware, getSummary)
router.get('/worker-salary-stats', ConstructionMiddleware, getWorkerAndSalaryStats);


export default router;