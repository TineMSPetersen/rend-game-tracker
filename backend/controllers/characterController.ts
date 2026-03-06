import type { Request, Response } from "express-serve-static-core";
import characterSkillModel from "../models/gameplay/character/characterSkillsModel.ts";
import characterModel from "../models/gameplay/character/characterModel.ts";
import consumableModel from "../models/gameplay/character/consumablesModel.ts";

const AddCharacterSkill = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const { name, level, effects, description } = req.body;

    const skillData = {
      name,
      level,
      effects,
      description,
    };

    const skill = new characterSkillModel(skillData);
    await skill.save();

    res
      .status(201)
      .json({ success: true, message: "Character Skill Added!", data: skill });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const AddConsumable = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const {
      name,
      type,
      price,
      risky,
      dimX,
      dimY,
      range,
      description,
      effects,
    } = req.body;

    const itemData = {
      name,
      type,
      price,
      risky,
      dimX,
      dimY,
      range,
      description,
      effects,
    };

    const consumable = new consumableModel(itemData);
    await consumable.save();

    res
      .status(201)
      .json({ success: true, message: "Consumable Added!", data: consumable });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const AddCharacter = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const {
      name,
      alive,
      stats,
      xp,
      level,
      gs,
      origin,
      alignment,
      reputation,
      status_effect,
      skills,
      mechUpgrades,
      gun,
      melee,
      mech,
      inventory,
    } = req.body;

    const characterData = {
      name,
      alive,
      stats,
      xp,
      level,
      gs,
      origin,
      alignment,
      reputation,
      status_effect,
      skills,
      mechUpgrades,
      gun,
      melee,
      mech,
      inventory,
    };

    const character = new characterModel(characterData);
    await character.save();

    res
      .status(201)
      .json({ success: true, message: "Character Added!", data: character });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { AddCharacterSkill, AddCharacter, AddConsumable };
