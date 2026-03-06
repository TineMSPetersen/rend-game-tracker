import mongoose, { Schema, Types } from "mongoose";

export interface IConsumable {
  name: string;
  type: "placable" | "handheld" | "charge";
  price: number;
  risky: boolean;
  dimX: number;
  dimY: number;
  range: number;
  description: string;
  effects: string[];
}

const consumableSchema = new Schema<IConsumable>({
  name: { type: String, required: true },
  type: { type: String, enum: ["placeable", "handheld", "charge"], required: true },
  price: { type: Number, deault: 0 },
  risky: { type: Boolean, default: false },
  dimX: { type: Number, default: 0 },
  dimY: { type: Number, default: 0 },
  range: { type: Number, default: 0 },
  description: { type: String, default: "No description"},
  effects: { type: [String], default: [] }
})

const consumableModel = mongoose.models.consumable || mongoose.model<IConsumable>("consumable", consumableSchema);

export default consumableModel;