import {Router} from 'express'
import addPostController from '../controllers/comments/addComment.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/add', authMiddleware, addPostController )