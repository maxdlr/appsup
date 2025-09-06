import { Router } from 'express';
import getUser from '../controller/getUser';
import createUser from '../controller/createUser';
import getAllUsers from '../controller/getAllUsers';

const router = Router();

router.get('/', [getAllUsers]);
router.get('/:id', [getUser]);
router.post('/', [createUser]);

export default router;
