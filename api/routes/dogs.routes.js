import {Router} from 'express';
import { getAll } from '../controllers/dogs.controller.js';

const dogsRouter = Router();

dogsRouter.get("/", getAll);

export default dogsRouter;