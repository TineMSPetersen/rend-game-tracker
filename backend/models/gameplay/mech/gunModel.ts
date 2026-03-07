import mongoose, { Schema, Types } from "mongoose";

export interface IGun {
  name: string;
  nickname: string;
  type: string;
  subtype: string;
  price: number;
  description: string;
  shots: string;
  keywords: string[];
  traits: Types.ObjectId[];
  effects: object[];
  range_min: number;
  range_max: number;
}

const effects = new Schema({
  type: { type: String, required: true },
  modifier: { type: Number, default: 0 },
  positive: { type: Boolean, default: true }
})

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
    traits: { type: [Schema.Types.ObjectId], ref: "trait", default: []},
    effects: { type: [effects], default: []},
    range_min: { type: Number, required: true},
    range_max: { type: Number, required: true },
  },
  { timestamps: true },
);

const gunModel =
  mongoose.models.gun || mongoose.model<IGun>("gun", gunSchema);

export default gunModel;
