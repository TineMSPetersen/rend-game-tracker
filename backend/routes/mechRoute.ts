import express from "express"
import { AddAmmo, AddGun, AddMech, AddMechUpgrade, AddMelee, AddTrait, GetMechList, GetUpgradeList, GetWeaponsList } from "../controllers/mechController.ts";


const mechRouter = express.Router();

mechRouter.post('/add-ammo', AddAmmo);
mechRouter.post("/add-trait", AddTrait);
mechRouter.post("/add-gun", AddGun);
mechRouter.post('/add-melee', AddMelee);
mechRouter.post("/add-mech", AddMech);
mechRouter.post("/add-upgrade", AddMechUpgrade);
mechRouter.get("/mechlist", GetMechList);
mechRouter.get("/weaponlist", GetWeaponsList);
mechRouter.get("/upgradelist", GetUpgradeList);

export default mechRouter;