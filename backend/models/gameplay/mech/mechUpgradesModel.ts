import mongoose, { Schema } from "mongoose";

export interface IMechUpgrade {
  name: string;
  level: number;
  price: number;
  effects: {
    modifierType: string;
    modifierAmount: number;
    description: string;
  }[]
}

const mechUpgradeSchema = new Schema({
  name: { type: String, required: true },
  level: { type: Number, default: 1 },
  price: { type: Number, default: 0 },
  effect: [
    {
      modifierType: { type: String, default: "None" },
      modifierAmount: { type: Number, default: 0 },
      description: { type: String, default: "" }
    }
  ]
})

const mechUpgradeModel =
  mongoose.models.mechupgrade || mongoose.model<IMechUpgrade>("mechupgrade", mechUpgradeSchema);

export default mechUpgradeModel;