import type { Request, Response } from "express-serve-static-core";
import characterSkillModel from "../models/gameplay/character/characterSkillsModel.ts";
import characterModel from "../models/gameplay/character/characterModel.ts";
import consumableModel from "../models/gameplay/character/consumablesModel.ts";
import meleeModel from "../models/gameplay/mech/meleeModel.ts";

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
    
    
    const { name, origin, mech } = req.body;
    const alive = true;
    const xp = 0;
    const level = 0;
    const gs = 0;
    const alignment = "none";
    const reputation = {
      "raytech": {
        "rep": 0,
        "status": "neutral"
      },
      "smith": {
        "rep": 0,
        "status": "neutral"
      },
      "shimizawa": {
        "rep": 0,
        "status": "neutral"
      },
      "ugc": {
        "rep": 0,
        "status": "neutral"
      },
      "amg": {
        "rep": 0,
        "status": "neutral"
      }
    }
    const status_effects: string[] = [];
    const inventory: string[] = [];
    const stats = req.body.stats;
    const skills = req.body.skills;
    const mechUpgrades = req.body.mechUpgrades || [];
    const gun = req.body.gun || [];
    const melee = req.body.melee || [];
    

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
      status_effects,
      skills,
      mechUpgrades,
      gun,
      melee,
      mech,
      inventory
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

const GetCharacterInfo = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const { characterId } = req.body;

    if (!characterId.id || typeof characterId.id !== "string") {
      return res
        .status(400)
        .json({ success: false, message: "Invalid comic Id" });
    }

    const characterData = await characterModel
      .findById(characterId.id)
      .populate("mechUpgrades")
      .populate({ path: "melee", model: meleeModel })
      .populate({
        path: "gun.gunId",
        model: "gun",
      })
      .populate({
        path: "gun.ammo.ammoId",
        model: "ammo",
      })
      .populate("mech")
      .populate("skills")
      .populate({
        path: "inventory",
        populate: {
          path: "itemId",
          model: "consumable",
        },
      });

    if (!characterData) {
      return res
        .status(404)
        .json({ success: false, message: "Character not found" });
    }

    res.status(201).json({ success: true, characterData });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getCharacterSkills = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const skills = await characterSkillModel.find();

    res.json({
      success: true,
      skills,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const CharacterList = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const characters = await characterModel.find();

    res.json({
      success: true,
      characters
    })
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
}

export {
  AddCharacterSkill,
  AddCharacter,
  AddConsumable,
  GetCharacterInfo,
  getCharacterSkills,
  CharacterList
};
