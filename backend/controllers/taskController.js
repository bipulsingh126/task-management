import { taskmodel } from "../model/task.js";
import { usermodel } from "../model/user.js";

const addTask = async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await usermodel.findOne({ email });
    
    if (!existingUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const task = new taskmodel({
      title,
      body,
      user: existingUser._id
    });

    await task.save();
    return res.status(200).json({ 
      success: true, 
      message: "Task added successfully",
      task: {
        _id: task._id,
        title: task.title,
        body: task.body,
        user: task.user
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await usermodel.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const tasks = await taskmodel.find({ user: user._id });
    return res.status(200).json({ success: true, tasks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateTask = async (req, res) => {
  try {
    const { title, body } = req.body;
    const taskId = req.params.id;

    const task = await taskmodel.findByIdAndUpdate(
      taskId,
      { title, body },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    return res.status(200).json({ 
      success: true, 
      message: "Task updated successfully",
      task
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    // First find the task to get user reference
    const task = await taskmodel.findById(taskId);
    if (!task) {
      return res.status(404).json({ 
        success: false, 
        message: "Task not found" 
      });
    }

    // Delete the task
    await taskmodel.findByIdAndDelete(taskId);

    // Update user's tasks array
    await usermodel.findByIdAndUpdate(
      task.user,
      { $pull: { tasks: taskId } }
    );

    return res.status(200).json({ 
      success: true, 
      message: "Task deleted successfully",
      taskId
    });
  } catch (error) {
    console.error("Delete task error:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Failed to delete task" 
    });
  }
};

export { addTask, updateTask, deleteTask, getAllTasks };
