import express from 'express';
import { CreateUser, DeleteUser, EditUser, GetUserById, GetUsers } from '../controllers/User.controller.js';

const router = express.Router();


router.post('/create',CreateUser);
router.get('/get-users',GetUsers);
router.get('/get-user/:id',GetUserById);
router.put('/edit-user/:id',EditUser);
router.delete('/delete-user/:id',DeleteUser);


export default router;