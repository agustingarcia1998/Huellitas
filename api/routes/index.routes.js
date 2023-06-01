import express from "express";
import dogsRouter from "./dogs.routes.js";
import catsRouter from "./cats.routes.js";
import userRouter from "./login.routes.js";
const router = express.Router();

router.use("/dogs", dogsRouter)
router.use("/cats", catsRouter);
router.use("/user", userRouter);
export default router;