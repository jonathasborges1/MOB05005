import express from "express";

import coachesRouter from "./coach"
import subjectsRouter from "./subject"

const routes = express.Router();

routes.use("/coachs", coachesRouter);
routes.use("/subjects", subjectsRouter);

export default routes;