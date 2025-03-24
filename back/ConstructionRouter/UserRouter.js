import express from 'express';
import { login, verify } from '../ConstructionController/AuthController.js'
import ConstructionMiddleware from '../ConstructionMiddleware/ConstructionMiddleware.js'

const router = express.Router();

router.post('/login', login);
router.get('/verify', ConstructionMiddleware, verify);


export default router;
