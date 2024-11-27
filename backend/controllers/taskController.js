import { taskmodel } from "../model/task.js";
import { usermodel } from "../model/user.js";

const createTask = async (req, res) => {
  try {
    const { title, desc } = req.body;
    const { id } = req.headers;

    // Validate required fields
    if (!title || !desc) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required"
      });
    }

    const newTask = new taskmodel({ title, desc });
    const savedTask = await newTask.save();
    await usermodel.findByIdAndUpdate(id, { $push: { tasks: savedTask._id } });

    res.status(200).json({ success: true, message: "Task created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};



export { createTask };