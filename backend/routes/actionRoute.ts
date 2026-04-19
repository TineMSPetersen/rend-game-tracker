import express from "express"
import { AddStatusEffect, Attack, ChangeAmmo, RemoveStatusEffect, UpdateStructure, UseItem } from "../controllers/actionController.ts";


const actionRouter = express.Router();

actionRouter.post('/use-item', UseItem);
actionRouter.post('/change-ammo', ChangeAmmo);
actionRouter.post('/add-status', AddStatusEffect);
actionRouter.post('/remove-status', RemoveStatusEffect)
actionRouter.post('/attack', Attack);
actionRouter.post('/structure', UpdateStructure);

export default actionRouter;