import express from "express";

import coachesRouter from "./coach"
import schedulesRouter from "./schedule"
import subjectsRouter from "./subject"

const routes = express.Router();

routes.use("/coachs", coachesRouter);
routes.use("/subjects", subjectsRouter);
routes.use("/schedule", schedulesRouter);

export default routes;