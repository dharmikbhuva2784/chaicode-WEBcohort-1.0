import express from "express";
import { registerUser } from "../controller/user.controller.js";
import { userLogin } from "../controller/user.controller.js";
import { resetPassword } from "../controller/user.controller.js";

const router = express.Router();

router.get("/register",registerUser);
router.get("/login",userLogin);
router.get("/reset-password",resetPassword);

export default router;