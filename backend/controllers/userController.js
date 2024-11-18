import { usermodel } from '../model/user.js'

const signIn = async (req, res) => {
  try {
    const { username } = req.body
    const { email } = req.body
    const user = await usermodel.findOne({ username: username })
    const existingUserByEmail = await usermodel.findOne({ email: email })
    if (user) {
      return res
        .status(300)
        .json({ success: false, message: 'User already exists' })
    } else if (username.length < 4) {
      return res.status(400).json({
        success: false,
        message: 'Username should be at least 4 characters long',
      })
    }
    if (existingUserByEmail) {
      return res.status(400).json({
        success: false,
        message: 'Email already in use',
      })
    }
    const newUser = new usermodel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
    await newUser.save()
    return res
      .status(200)
      .json({ success: true, message: 'User created successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
}
export { signIn }
