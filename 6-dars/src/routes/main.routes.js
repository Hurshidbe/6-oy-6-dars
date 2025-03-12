import { Router } from "express";
import userRoute from "./user.routes.js";
import postRoute from "./posts.routes.js";

const ROUTES = Router();
ROUTES.use("/api", userRoute);
ROUTES.use("/api", postRoute);
export default ROUTES;
