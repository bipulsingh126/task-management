import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [{
    type: mongoose.Types.ObjectId,
    ref: 'task',
  }],
})

export const usermodel = mongoose.model('User', userSchema);

