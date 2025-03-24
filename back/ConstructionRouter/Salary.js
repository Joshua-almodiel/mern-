import express from 'express';
import ConstructionMiddleware from '../ConstructionMiddleware/ConstructionMiddleware.js';
import { addSalary, getSalary} from '../ConstructionController/SalariesController.js'

const router = express.Router();


router.post('/add', ConstructionMiddleware, addSalary)
router.get('/:id/:role', ConstructionMiddleware, getSalary)





export default router
