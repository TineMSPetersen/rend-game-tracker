import mongoose, { Schema, Types } from "mongoose";

type WeaponAmmo = {
  ammoId: string;
  amount: number;
  selected: boolean;
};

export interface INPC {
  name: string;
  alive: boolean;
  origin: string;
  alignment: string;
  status_effects: Types.ObjectId[];
  skills: Types.ObjectId[];
  mechUpgrades: Types.ObjectId[];
  gun: {
  gunId: Types.ObjectId;
  ammo: WeaponAmmo[];
  equipped: boolean;
}[];
  melee: Types.ObjectId[];
  mech: Types.ObjectId;
  inventory: {
    itemId: Types.ObjectId;
    amount: number;
  }[];
}

const gun = new Schema(
  {
    gunId: { type: Schema.Types.ObjectId, ref: "gun", required: true },
    ammo: [
      {
        ammoId: { type: Schema.Types.ObjectId, ref: "ammo", required: true },
        amount: { type: Number, default: 0 },
        selected: { type: Boolean, default: false }
      }
    ],
    equipped: { type: Boolean, default: false }
  },
  { _id: true },
);

const inventory = new Schema(
  {
    consumableId: { type: Schema.Types.ObjectId, ref: "consumable", required: true },
    amount: { type: Number, default: 1 }
  }
)

const npcSchema = new Schema<INPC>(
  {
    name: { type: String, required: true },
    alive: { type: Boolean, required: true },
    origin: { type: String, default: "None" },
    alignment: { type: String, default: "None" },
    status_effects: { type: [Schema.Types.ObjectId], ref: "statuseffect", default: [] },
    skills: { type: [Schema.Types.ObjectId], ref: "characterskill", default: []},
    mechUpgrades: { type: [Schema.Types.ObjectId], ref: "mechupgrade", default: [] },
    gun: { type: [gun], default: []},
    melee: { type: [Schema.Types.ObjectId], ref: "melee", default: [] },
    mech: { type: Schema.Types.ObjectId, ref: "mech", default: null },
    inventory: { type: [inventory], deault: [] }
  },
  { timestamps: true },
);

const npcModel =
  mongoose.models.npc ||
  mongoose.model<INPC>("npc", npcSchema);

export default npcModel;
