import express from "express"
import { AddStatusEffect, ChangeAmmo, RemoveStatusEffect, UseItem } from "../controllers/actionController.ts";


const actionRouter = express.Router();

actionRouter.post('/use-item', UseItem);
actionRouter.post('/change-ammo', ChangeAmmo);
actionRouter.post('/add-status', AddStatusEffect);
actionRouter.post('/remove-status', RemoveStatusEffect)

export default actionRouter;