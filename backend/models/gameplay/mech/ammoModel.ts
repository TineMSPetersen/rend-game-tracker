import mongoose, { Schema } from "mongoose";

export interface IAmmo {
  name: string;
  weapon: string;
  price?: number;
  description?: string;
  damage_type: string;
  strength: number;
  damage: number;
  special_effects?: string;
}

const ammoSchema = new Schema<IAmmo>(
  {
    name: { type: String, required: true },
    weapon: { type: String, required: true },
    price: { type: Number, default: 0},
    description: { type: String, default: "No description"},
    damage_type: { type: String, required: true },
    strength: { type: Number, required: true },
    damage: { type: Number, required: true },
    special_effects: { type: String, default: "none" }
  },
  { timestamps: true },
);

const ammoModel =
  mongoose.models.ammo || mongoose.model<IAmmo>("ammo", ammoSchema);

export default ammoModel;
