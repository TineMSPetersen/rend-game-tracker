import mongoose, { Schema } from "mongoose";

export interface ICharacterSkill {
  name: string;
  level: number;
  effects: {
    modifierType: string;
    modifierAmount: number;
    description: string;
  }[];
  description: string;
}

const characterSkillSchema = new Schema({
  name: { type: String, required: true },
  level: { type: Number, default: 1 },
  effects: [
    {
      modifierType: { type: String, default: "None" },
      modifierAmount: { type: Number, default: 0 },
      description: { type: String, default: "" }
    }
  ],
  description: { type: String, default: "" }
})

const characterSkillModel =
  mongoose.models.characterskill || mongoose.model<ICharacterSkill>("characterskill", characterSkillSchema);

export default characterSkillModel;