import express from "express"
import { AddCharacter, AddCharacterSkill, AddConsumable } from "../controllers/characterController.ts";


const characterRouter = express.Router();

characterRouter.post('/add-skill', AddCharacterSkill);
characterRouter.post('/add-character', AddCharacter);
characterRouter.post('/add-item', AddConsumable);

export default characterRouter;