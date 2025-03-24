import express from 'express';
import ConstructionMiddleware from '../ConstructionMiddleware/ConstructionMiddleware.js';
import {addLeave, getLeave, getLeaves, getLeaveDetail, updateLeave} from '../ConstructionController/LeavesController.js'

const router = express.Router();


router.post('/add', ConstructionMiddleware, addLeave)
router.get('/detail/:id', ConstructionMiddleware, getLeaveDetail)
router.get('/:id/:role', ConstructionMiddleware, getLeave)
router.get('/', ConstructionMiddleware, getLeaves)
router.put('/:id', ConstructionMiddleware, updateLeave)





export default router
