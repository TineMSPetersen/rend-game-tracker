import mongoose, { Schema } from "mongoose";

export interface IMelee {
  name: string;
  nickname: string;
  type: string;
  mounting: string;
  price: number;
  description: string;
  lethal_hits: boolean;
  ws: number;
  attacks: object[];
  damage_type: object[];
  strength: object[];
  special_rules: string;
}

const attack_condition = new Schema(
  {
    condition: { type: String, default: "none" },
    number: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { _id: true },
);

const damage_type = new Schema(
  {
    condition: { type: String, default: "none" },
    type: { type: String, requred: true },
    number: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { _id: true },
);

const strength = new Schema(
  {
    condition: { type: String, default: "none" },
    number: { type: mongoose.Schema.Types.Mixed, required: true }
  },
  { _id: true },
);

const meleeSchema = new Schema<IMelee>(
  {
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    type: { type: String, default: "melee" },
    mounting: { type: String, required: true },
    price: { type: Number, default: 0},
    description: { type: String, default: "No description"},
    lethal_hits: { type: Boolean, default: false },
    ws: { type: mongoose.Schema.Types.Mixed, required: true},
    attacks: { type: [attack_condition], required: true },
    damage_type: { type: [damage_type], required: true },
    strength: { type: [strength], required: true },
    special_rules: { type: String, default: "None"},
  },
  { timestamps: true },
);

const meleeModel =
  mongoose.models.melee || mongoose.model<IMelee>("melee", meleeSchema);

export default meleeModel;
