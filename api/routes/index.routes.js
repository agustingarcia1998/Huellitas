import express from "express";
import dogsRouter from "./dogs.routes.js";
import catsRouter from "./cats.routes.js";

const router = express.Router();

router.use("/dogs", dogsRouter)
router.use("/cats", catsRouter);

export default router;