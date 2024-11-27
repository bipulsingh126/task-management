import { taskmodel } from "../model/task.js";
import { usermodel } from "../model/user.js";

const addTask = async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await usermodel.findOne({ email });
    if (existingUser) {
      const task = new taskmodel({ title, body, user: existingUser });
      await task.save();
      existingUser.tasks.push(task);
      existingUser.save();
      res.status(200).json({ success: true, message: "Task added" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//update

const updateTask = async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await usermodel.findOne({ email });
    if (existingUser) {
      const task = await taskmodel.findByIdAndUpdate(req.params.id, {
        title,
        body,
      });
      task.save();
      res.status(200).json({ success: true, message: "Task updated" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// delete
const deleteTask = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await usermodel.findOneAndUpdate(
      { email },
      { $pull: { tasks: req.params.id } }
    );
    if (existingUser) {
      const task = await taskmodel.findByIdAndDelete(req.params.id);
      res.status(200).json({ success: true, message: "Task deleted" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// get all tasks

const getAllTasks = async (req, res) => {
  try {
    const task = await taskmodel
      .find({ user: req.params.id })
      .sort({ createdAt: -1 });
    if (task.length !== 0) {
      res.status(200).json({ success: true, message: "Task found", task });
    } else {
      res.status(200).json({ success: true, message: "Task not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { addTask, updateTask, deleteTask, getAllTasks };
