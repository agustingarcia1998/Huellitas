import express from "express";
import dogsRouter from "./dogs.routes.js";

const router = express.Router();

router.use("/dogs", dogsRouter)

export default router;