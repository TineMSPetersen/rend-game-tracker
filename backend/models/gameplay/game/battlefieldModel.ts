import mongoose, { Schema, Types } from "mongoose";

export interface IBattlefield {
  players: Types.ObjectId[];
  playerCharacters: Types.ObjectId[];
  allies: Types.ObjectId[];
  enemies: Types.ObjectId[];
}

const battlefieldSchema = new Schema({
  players: { type: [Schema.Types.ObjectId], ref: "user", default: [] },
  playerCharacters: { type: [Schema.Types.ObjectId], ref: "character", default: [] },
  allies: { type: [Schema.Types.ObjectId], ref: "npc", default: [] },
  enemies: { type: [Schema.Types.ObjectId], ref: "npc", default: [] },
})

const battlefieldModel =
  mongoose.models.battlefield || mongoose.model<IBattlefield>("battlefield", battlefieldSchema);

export default battlefieldModel;