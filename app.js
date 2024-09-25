import { config } from "dotenv";
import express from "express";
import taskRouter from "./routes/task.js";
import userRouter from "./routes/user.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";

export const app = express();

config({
    path:"./data/config.env",
});

const router = express.Router();


// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET", "POST", "PUT", "DELETE"],
    // credentials: true,
}));

// Using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
    res.send("Nice Working");
});

//Using Error Middleware
app.use(errorMiddleware);