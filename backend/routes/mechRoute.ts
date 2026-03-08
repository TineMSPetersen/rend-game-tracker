import express from "express"
import { AddAmmo, AddGun, AddMech, AddMechUpgrade, AddMelee, AddTrait, GetMechList } from "../controllers/mechController.ts";


const mechRouter = express.Router();

mechRouter.post('/add-ammo', AddAmmo);
mechRouter.post("/add-trait", AddTrait);
mechRouter.post("/add-gun", AddGun);
mechRouter.post('/add-melee', AddMelee);
mechRouter.post("/add-mech", AddMech);
mechRouter.post("/add-upgrade", AddMechUpgrade);
mechRouter.get("/mechList", GetMechList);

export default mechRouter;