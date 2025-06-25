import express from 'express';
import * as authController from '../controllers/authController.js';

const router = express.Router();

router.get('/signup',authController.signup_get)
router.get('/login',authController.login_get)
router.post('/signup',authController.signup_post)
router.post('/login',authController.login_post)

export default router;