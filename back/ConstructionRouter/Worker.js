import express from 'express';
import ConstructionMiddleware from '../ConstructionMiddleware/ConstructionMiddleware.js';
import {addWorker, getWorkers, getWorker, updateWorker, fetchWorkersBySiteId} from '../ConstructionController/WorkersController.js'

const router = express.Router();

router.get('/', ConstructionMiddleware, getWorkers)
router.post('/add', ConstructionMiddleware, addWorker)
router.get('/:id', ConstructionMiddleware, getWorker)
router.put('/:id', ConstructionMiddleware, updateWorker)
router.get('/site/:id', ConstructionMiddleware, fetchWorkersBySiteId)




export default router
