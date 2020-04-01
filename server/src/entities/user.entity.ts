import mongoose, { Schema, Document } from "mongoose";
import { NextFunction } from "express";
import { IMessage } from "./message.entity";

export interface IUser extends Document {
  username: string;
  messages: Array<IMessage>;
};

const schema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: "Message"
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

export default mongoose.model<IUser>("User", schema);
