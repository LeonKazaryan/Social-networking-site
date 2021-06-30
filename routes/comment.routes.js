import {Router} from 'express'
import addCommentController from '../controllers/comments/addComment.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/add', authMiddleware, addCommentController )