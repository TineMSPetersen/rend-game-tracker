import mongoose, { Schema, Types } from "mongoose";

type FactionRep = {
  rep: number;
  status: "abhorred" | "detested" | "disliked" | "neutral" | "liked" | "valued" | "cherished";
};

type WeaponAmmo = {
  ammoId: string;
  amount: number;
  selected: boolean;
};

export interface ICharacter {
  name: string;
  alive: boolean;
  stats: {
    judgement: number;
    optimization: number;
    charisma: number;
    knowledge: number;
    endurance: number;
    yield: number;
  };
  xp: number;
  level: number;
  gs: number;
  origin: string;
  alignment: string;
  reputation: {
    raytech: FactionRep;
    smith: FactionRep;
    shimizawa: FactionRep;
    vcg: FactionRep;
    nmg: FactionRep;
  };
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

const characterSchema = new Schema<ICharacter>(
  {
    name: { type: String, required: true },
    alive: { type: Boolean, required: true },
    stats: {
      judgement: { type: Number, default: 0, required: true },
      optimization: { type: Number, default: 0, required: true },
      charisma: { type: Number, default: 0, required: true },
      knowledge: { type: Number, default: 0, required: true },
      endurance: { type: Number, default: 0, required: true },
      yield: { type: Number, default: 0, required: true },
    },
    xp: { type: Number, default: 0 },
    level: { type: Number, default: 0 },
    gs: { type: Number, default: 0 },
    origin: { type: String, default: "None" },
    alignment: { type: String, default: "None" },
    reputation: {
      raytech: {
        rep: { type: Number, default: 0 },
        status: { type: String, enum: ["abhorred", "detested", "disliked", "neutral", "liked", "valued", "cherished"], default: "neutral" }
      },
      smith: {
       rep: { type: Number, default: 0 },
        status: { type: String, enum: ["abhorred", "detested", "disliked", "neutral", "liked", "valued", "cherished"], default: "neutral" }
      },
      shimizawa: {
        rep: { type: Number, default: 0 },
        status: { type: String, enum: ["abhorred", "detested", "disliked", "neutral", "liked", "valued", "cherished"], default: "neutral" }
      },
      vcg: {
        rep: { type: Number, default: 0 },
        status: { type: String, enum: ["abhorred", "detested", "disliked", "neutral", "liked", "valued", "cherished"], default: "neutral" }
      },
      nmg: {
        rep: { type: Number, default: 0 },
        status: { type: String, enum: ["abhorred", "detested", "disliked", "neutral", "liked", "valued", "cherished"], default: "neutral" }
      },
    },
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

const characterModel =
  mongoose.models.character ||
  mongoose.model<ICharacter>("character", characterSchema);

export default characterModel;
