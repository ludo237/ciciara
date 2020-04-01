import mongoose, { Schema, Document } from "mongoose";
import { IMessage } from "./message.entity";

export interface IUser extends Document {
  username: string;
  messages: Array<IMessage>;
};

const schema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }]
}, {
  toJSON: {
    virtuals: true
  }
});

export default mongoose.model<IUser>("User", schema);
