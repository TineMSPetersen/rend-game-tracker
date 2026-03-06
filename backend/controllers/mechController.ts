import type { Request, Response } from "express-serve-static-core";
import ammoModel from "../models/gameplay/mech/ammoModel.ts";
import traitModel from "../models/gameplay/mech/traitsModel.ts";
import gunModel from "../models/gameplay/mech/gunModel.ts";
import mechModel from "../models/gameplay/mech/mechModel.ts";
import meleeModel from "../models/gameplay/mech/meleeModel.ts";
import mechUpgradeModel from "../models/gameplay/mech/mechUpgradesModel.ts";

const AddAmmo = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const {
      name,
      nickname,
      shortening,
      weapon,
      price,
      description,
      damage_type,
      strength,
      damage,
      special_effects,
    } = req.body;

    const ammoData = {
      name,
      nickname,
      shortening,
      weapon,
      price,
      description,
      damage_type,
      strength,
      damage,
      special_effects,
    };

    const ammo = new ammoModel(ammoData);
    await ammo.save();

    res.status(201).json({ success: true, message: "Ammo added!", data: ammo });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const AddTrait = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const { name, level, effects } = req.body;

    const traitData = { name, level, effects };

    const trait = new traitModel(traitData);
    await trait.save();

    res
      .status(201)
      .json({ success: true, message: "Trait added!", data: trait });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const AddGun = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const {
      name,
      nickname,
      type,
      subtype,
      price,
      description,
      shots,
      keywords,
      traits,
      effects,
      range_min,
      range_max,
    } = req.body;

    const gunData = {
      name,
      nickname,
      type,
      subtype,
      price,
      description,
      shots,
      keywords,
      traits,
      effects,
      range_min,
      range_max,
    };

    const gun = new gunModel(gunData);
    await gun.save();

    res.status(201).json({ success: true, message: "Gun added!", data: gun });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const AddMelee = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const {
      name,
      type,
      mounting,
      price,
      description,
      lethal_hits,
      ws,
      attacks,
      damage_type,
      strength,
      special_rules,
    } = req.body;

    const meleeData = {
      name,
      type,
      mounting,
      price,
      description,
      lethal_hits,
      ws,
      attacks,
      damage_type,
      strength,
      special_rules,
    };

    const melee = new meleeModel(meleeData);
    await melee.save();

    res
      .status(201)
      .json({ success: true, message: "Melee Weapon added!", data: melee });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const AddMech = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const {
      modelNumber,
      name,
      faction,
      description,
      price,
      stats,
      structure,
      components,
      core,
      cockpit,
      traits,
      shield,
    } = req.body;

    const mechData = {
      modelNumber,
      name,
      faction,
      description,
      price,
      stats,
      shield,
      structure,
      components,
      core,
      cockpit,
      traits,
    };

    const mech = new mechModel(mechData);
    await mech.save();

    res.status(201).json({ success: true, message: "Mech added!", data: mech });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const AddMechUpgrade = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {

    const { name, level, price, effects } = req.body;

    const upgradeData = { name, level, price, effects }

    const mechUpgrade = new mechUpgradeModel(upgradeData);
    await mechUpgrade.save();

    res.status(201).json({ success: true, message: "Mech added!", data: mechUpgrade });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
}

export { AddAmmo, AddTrait, AddGun, AddMelee, AddMech, AddMechUpgrade };
