import mongoose, { Schema } from "mongoose";

export interface ITrait {
  name: string;
  level: number;
  effects: {
    modifierType: string;
    modifierAmount: number;
    description: string;
  }[]
}

const traitSchema = new Schema({
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

const traitModel =
  mongoose.models.trait || mongoose.model<ITrait>("trait", traitSchema);

export default traitModel;