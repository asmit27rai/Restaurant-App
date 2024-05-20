import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import bookingRoute from "./routes/bookingRoute.js";
import cors from "cors";
import db from "./database/db.js";
const app = express();


dotenv.config({path:"./config/config.env"});


app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["PUT"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOption = {
    origin:'http://localhost:3000',
    credentials:true
};
app.use(cors(corsOption));

db();

app.use("/api/user",userRoute);
app.use("/api/booking",bookingRoute);


export default app;
