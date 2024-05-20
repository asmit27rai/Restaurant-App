import express from "express";
import { booking, order } from "../controller/taskController.js";
const router = express.Router();
router.route("/booking").post(booking);
router.route("/order").post(order);
export default router;