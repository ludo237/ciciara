import mongoose, { Schema, Document } from "mongoose";
import { NextFunction } from "express";
import { IMessage } from "./message.entity";
import { IUser } from "./user.entity";

export interface IRoom extends Document {
  name: string;
  messages: Array<IMessage>;
  users: Array<IUser>;
};

const schema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: "Message"
  }],
  users: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

export default mongoose.model<IRoom>("Room", schema);
