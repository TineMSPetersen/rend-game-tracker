import mongoose, { Schema } from "mongoose";

export interface ITrait {
  name: string;
  level: number;
  effects: {
    modifierType: string;
    modifierAmount: number;
    modifierPositive: boolean;
    description: string;
  }[]
}

const traitSchema = new Schema<ITrait>({
  name: { type: String, required: true },
  level: { type: Number, default: 1 },
  effects: [
    {
      modifierType: { type: String, default: "None" },
      modifierAmount: { type: Number, default: 0 },
      modifierPositive: { type: Boolean, default: true},
      description: { type: String, default: "" }
    }
  ]
})

const traitModel =
  mongoose.models.trait || mongoose.model<ITrait>("trait", traitSchema);

export default traitModel;