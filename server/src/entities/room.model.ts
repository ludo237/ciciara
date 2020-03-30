import mongoose, { Schema, Document } from "mongoose";
import { IMessage } from "./message.model";
import { IUser } from "./user.model";

export interface IRoom extends Document {
  name: string;
  messages: Array<IMessage>;
  users: Array<IUser>;
};

const schema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  users: [{ type: Schema.Types.ObjectId, ref: "User" }]
}, {
  toJSON: {
    virtuals: true
  }
});

export default mongoose.model<IRoom>("Room", schema);
