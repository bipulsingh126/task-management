import express from "express";
import { loginUserController, signIn } from "../controllers/userController.js";
const router = express.Router();

router.post("/sign-in", signIn);
router.post("/login", loginUserController);

export default router;
