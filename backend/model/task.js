import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
    unique: true,
  },
  important: {
    type: Boolean,
    default: false,
  },
  complete: {
    type: Boolean,
    default: false,
  },
}, {timestamps : true})

export const taskmodel =
  mongoose.models.task || mongoose.model('task', taskSchema)
