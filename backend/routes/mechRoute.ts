import express from "express"
import { AddAmmo, AddGun, AddMech, AddTrait } from "../controllers/mechController.ts";


const mechRouter = express.Router();

mechRouter.post('/add-ammo', AddAmmo);
mechRouter.post("/add-trait", AddTrait);
mechRouter.post("/add-gun", AddGun)
mechRouter.post("/add-mech", AddMech);

export default mechRouter;