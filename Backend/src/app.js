import express from "express";

import authRouter from "./routes/auth.routes.js";
import taskRouter from "./routes/task.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRouter);

app.use("/api/v1/tasks", taskRouter);

export default app;