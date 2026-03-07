import mongoose, { Schema, Types } from "mongoose";

export interface IMech {
  modelNumber: string;
  name: string;
  faction: string;
  image: string;
  description: string;
  price: number;
  stats: {
    movement: number;
    kn: number;
    em: number;
    th: number;
    ch: number;
    ex: number;
    ewar: number;
  };
  shield: {
    kn: number;
    em: number;
    th: number;
    ch: number;
    ex: number;
    structure: number;
  };
  structure: number;
  components: {
    name: string;
    shortening: string;
    structure: number;
  }[];
  core: number;
  cockpit: number;
  traits: string[];
}

const compoents = new Schema({
  name: { type: String, required: true },
  shortening: { type: String, required: true },
  structure: { type: Number, default: 1 }
}
)

const mechSchema = new Schema<IMech>({
  modelNumber: { type: String, required: true },
  name: {  type: String, required: true },
  faction: { type: String, default: "None"},
  image: { type: String, default: "https://images.pexels.com/photos/8566566/pexels-photo-8566566.jpeg"},
  description: { type: String, default: "No description" },
  price: { type: Number, default: 0 },
  stats: {
    movement: { type: Number, default: 0 },
    kn: { type: Number, default: 0 },
    em: { type: Number, default: 0 },
    th: { type: Number, default: 0 },
    ch: { type: Number, default: 0 },
    ex: { type: Number, default: 0 },
    ewar: { type: Number, default: 0 }
  },
  shield: {
    kn: { type: Number, default: 0 },
    em: { type: Number, default: 0 },
    th: { type: Number, default: 0 },
    ch: { type: Number, default: 0 },
    ex: { type: Number, default: 0 },
    structure: { type: Number, default: 0 }
  },
  structure: { type: Number, default: 1 },
  components: { type: [compoents], required: true },
  core: { type: Number, default: 1 },
  cockpit: { type: Number, default: 1 },
  traits: { type: [String], default: []}
})

const mechModel = mongoose.models.mech || mongoose.model<IMech>("mech", mechSchema);

export default mechModel;