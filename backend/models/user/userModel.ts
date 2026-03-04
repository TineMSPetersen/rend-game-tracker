import mongoose, { Schema, Types } from "mongoose";

export interface IUser {
  username: string;
  password: string;
  characters: Types.ObjectId[]
}

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  characters: { type: [Schema.Types.ObjectId], default: [] }
})

const userModel =
  mongoose.models.user || mongoose.model<IUser>("user", userSchema);

export default userModel;