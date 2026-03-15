import express from "express"
import { ChangeAmmo, UseItem } from "../controllers/actionController.ts";


const actionRouter = express.Router();

actionRouter.post('/use-item', UseItem);
actionRouter.post('/change-ammo', ChangeAmmo);

export default actionRouter;