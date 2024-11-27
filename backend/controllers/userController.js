import { usermodel } from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//signin
const signIn = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new usermodel({ email, username, password });
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    const savedUser = await user.save();
    res
      .status(200)
      .json({ success: true, message: "User created", id: savedUser._id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "user alredy exist" });
  }
};

//login
const loginUserController = async (req, res) => {
  try {
    const user = await usermodel.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({ success: false, message: "User not found" });
    }
    const isPasswordMatch = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) {
      res.status(400).json({ success: false, message: "Invalid password" });
    }
    const { password, ...others } = user._doc;
    res
      .status(200)
      .json({ success: true, message: "User logged in", ...others });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { signIn, loginUserController };
