import { Router } from 'express';
import * as LoginController from '../controllers/loginController';
import * as passwordRecoverController from '../controllers/passwordRecoverController';
import * as SignInController from '../controllers/signInController';

const router = Router();

router.get('/', (req, res)=>{
    res.send('home');
});

router.get('/login', LoginController.login);
router.get('/passwordRecover', passwordRecoverController.passwordRecover);
router.get('/signIn', SignInController.signIn);

export default router;