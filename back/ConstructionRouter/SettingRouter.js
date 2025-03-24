import express from 'express';
import ConstructionMiddleware from '../ConstructionMiddleware/ConstructionMiddleware.js';
import { changePassword } from '../ConstructionController/SettingController.js'

const router = express.Router();


router.put('/change-password', ConstructionMiddleware, changePassword)





export default router
