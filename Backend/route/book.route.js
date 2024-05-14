import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("https://project-manga.vercel.app/", getBook);

export default router;
