import express from "express";
import sendInfo from "../controller/sendInfo.js";

const router = express.Router();

router.post("/send", sendInfo);

export default router;