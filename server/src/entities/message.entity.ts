import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.entity";
import { IRoom } from "./room.entity";
import { NextFunction } from "express";

export interface IMessage extends Document {
  username: string;
  user: IUser["_id"];
  room: IRoom["_id"];
};

const schema = new Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

export default mongoose.model<IMessage>("Message", schema);
