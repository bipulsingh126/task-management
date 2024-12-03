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
    const email = req.params.id;
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const tasks = await taskmodel.find({ user: user._id })
      .sort({ createdAt: -1 })
      .select('title body createdAt');

    return res.status(200).json({ 
      success: true, 
      tasks,
      message: "Tasks fetched successfully" 
    });
  } catch (error) {
    console.error("Error in getAllTasks:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateTask = async (req, res) => {
  try {
    const { title, body } = req.body;
    const taskId = req.params.id;
    const userEmail = req.body.email;  // Get user email for verification

    // Validate inputs
    if (!title || !body) {
      return res.status(400).json({ 
        success: false, 
        message: "Title and body are required" 
      });
    }

    // Find user by email
    const user = await usermodel.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "User not found" 
      });
    }

    // Find task and verify ownership
    const existingTask = await taskmodel.findById(taskId);
    if (!existingTask) {
      return res.status(404).json({ 
        success: false, 
        message: "Task not found" 
      });
    }

    // Verify task belongs to user
    if (existingTask.user.toString() !== user._id.toString()) {
      return res.status(403).json({ 
        success: false, 
        message: "Not authorized to update this task" 
      });
    }

    // Update the task
    const updatedTask = await taskmodel.findByIdAndUpdate(
      taskId,
      { 
        title, 
        body,
        updatedAt: new Date()
      },
      { new: true }
    ).select('title body createdAt updatedAt');

    return res.status(200).json({ 
      success: true, 
      message: "Task updated successfully",
      task: updatedTask
    });
  } catch (error) {
    console.error("Error in updateTask:", error);
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
