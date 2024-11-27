import express from 'express';
import { createTask } from '../controllers/taskController.js';
import authanticateToken from '../middleware/auth.js';

const taskRouter = express.Router();

taskRouter.post('/create-task' , authanticateToken , createTask);



export default taskRouter;