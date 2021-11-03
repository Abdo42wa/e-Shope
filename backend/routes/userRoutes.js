import express from "express";
const router = express.Router();
import { authUser, getUserProfile, getUsers, registerUser, updateUserProofile, deleteUser, getUserById, updateUser } from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, admin, getUsers)

router.post('/login', authUser)

router.route('/:id').delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProofile);




export default router;