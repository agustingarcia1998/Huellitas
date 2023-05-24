import {Router} from 'express';
import { addPet, deleteById, getAll, getById, updateById } from '../controllers/cats.controllers.js';

const catsRouter = Router();

catsRouter.get("/", getAll);
catsRouter.get("/:id", getById);
catsRouter.post("/", addPet);
catsRouter.put("/:id", updateById);
catsRouter.delete("/:id", deleteById);

export default catsRouter;