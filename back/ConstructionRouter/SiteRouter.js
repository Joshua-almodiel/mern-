import express from 'express';
import ConstructionMiddleware from '../ConstructionMiddleware/ConstructionMiddleware.js';
import {addSite, getSites, getSite, updateSite, deleteSite} from '../ConstructionController/SiteController.js'
const router = express.Router();

router.get('/', ConstructionMiddleware, getSites)
router.post('/add', ConstructionMiddleware, addSite)
router.get('/:id', ConstructionMiddleware, getSite)
router.put('/:id', ConstructionMiddleware, updateSite)
router.delete('/:id', ConstructionMiddleware, deleteSite)




export default router
