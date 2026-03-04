import mongoose, { Schema } from "mongoose";

export interface IStatusEffect {
  name: string;
  level: number;
  effects: {
    modifierType: string;
    modifierAmount: number;
    description: string;
  }[]
}

const statusEffectSchema = new Schema({
  name: { type: String, required: true },
  level: { type: Number, default: 1 },
  effect: [
    {
      modifierType: { type: String, default: "None" },
      modifierAmount: { type: Number, default: 0 },
      description: { Type: String, default: "" }
    }
  ]
})

const statusEffectModel =
  mongoose.models.statuseffect || mongoose.model<IStatusEffect>("statuseffect", statusEffectSchema);

export default statusEffectModel;