import { Router } from 'express';
import userRoutes from './api/users/routes/index';

const router = Router();

router.use('/users', userRoutes.v1);

export default router;
