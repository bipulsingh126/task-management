import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, },
    body: {
      type: String,
      required: true,
    },
    user : [{
      type : mongoose.Types.ObjectId,
       ref : "User"
    }]
  }
);

export const taskmodel = mongoose.model('task', taskSchema);