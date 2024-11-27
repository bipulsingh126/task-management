import express from "express";
import { addTask, deleteTask, getAllTasks, updateTask } from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.post("/addtask", addTask);
taskRouter.put("/updatetask/:id", updateTask);
taskRouter.delete("/deletetask/:id" , deleteTask);
taskRouter.get("/getalltasks/:id", getAllTasks);

export default taskRouter;
