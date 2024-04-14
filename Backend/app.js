import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import db from "./database/db.js"
// import { errorMiddleWare } from "./error/error.js";
import signroute from "./routes/signroute.js"
const app = express();


dotenv.config({path:"./config/config.env"});


app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["PUT"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/signup",signroute);
db();
// app.use(errorMiddleWare)
export default app;
