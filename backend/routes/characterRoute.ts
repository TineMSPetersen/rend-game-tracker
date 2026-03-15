import express from "express"
import { AddCharacter, AddCharacterSkill, AddConsumable, CharacterList, GetCharacterInfo, getCharacterSkills } from "../controllers/characterController.ts";


const characterRouter = express.Router();

characterRouter.post('/add-skill', AddCharacterSkill);
characterRouter.post('/add-character', AddCharacter);
characterRouter.post('/add-item', AddConsumable);
characterRouter.post('/get-character-info', GetCharacterInfo);

characterRouter.get('/get-skills', getCharacterSkills);
characterRouter.get('/character-list', CharacterList)

export default characterRouter;