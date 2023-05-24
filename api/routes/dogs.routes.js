import {Router} from 'express';
import { addPet, deleteById, getAll, getById, updateById } from '../controllers/dogs.controller.js';

const dogsRouter = Router();

dogsRouter.get("/", getAll);
dogsRouter.get("/:id", getById);
dogsRouter.post("/", addPet);
dogsRouter.put("/:id", updateById);
dogsRouter.delete("/:id", deleteById);
export default dogsRouter;