import express from "express"
import { UseItem } from "../controllers/actionController.ts";


const actionRouter = express.Router();

actionRouter.post('/use-item', UseItem);

export default actionRouter;