import express from "express";
import { signup, login } from "../controller/user.controller.js";
const router = express.Router();

router.post("https://project-manga-frontend.vercel.app/signup", signup);
router.post("https://project-manga-frontend.vercel.app/login", login);

export default router;
