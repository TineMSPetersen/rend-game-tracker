import express from "express"
import { AddCharacter, AddCharacterSkill, AddConsumable, GetCharacterInfo } from "../controllers/characterController.ts";


const characterRouter = express.Router();

characterRouter.post('/add-skill', AddCharacterSkill);
characterRouter.post('/add-character', AddCharacter);
characterRouter.post('/add-item', AddConsumable);
characterRouter.post('/get-character-info', GetCharacterInfo);

export default characterRouter;