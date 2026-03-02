import mongoose, { Schema } from "mongoose";

export interface IGun {
  name: string;
  nickname: string;
  type: string;
  subtype: string;
  price: number;
  description: string;
  shots: string;
  keywords: string[];
  traits: string[];
  effects: string[];
  range_min: number;
  range_max: number;
}

const gunSchema = new Schema<IGun>(
  {
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    type: { type: String, default: "gun" },
    subtype: { type: String, required: true },
    price: { type: Number, default: 0},
    description: { type: String, default: "No description"},
    shots: { type: mongoose.Schema.Types.Mixed, required: true },
    keywords: { type: [String], default: ["No keywords"] },
    traits: { type: [String], default: ["No traits"]},
    effects: { type: [String], default: ["No effects"]},
    range_min: { type: Number, required: true},
    range_max: { type: Number, required: true },
  },
  { timestamps: true },
);

const gunModel =
  mongoose.models.gun || mongoose.model<IGun>("gun", gunSchema);

export default gunModel;
