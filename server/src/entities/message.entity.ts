import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.entity";
import { IRoom } from "./room.entity";
import { NextFunction } from "express";

export interface IMessage extends Document {
  username: string;
  user: IUser["_id"];
  room: IRoom["_id"];
  created_at: Number;
  updated_at: Number;
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
  },
  created_at: {
    type: Number,
    required: true
  },
  updated_at: {
    type: Number,
    required: true
  }
}, {
  toJSON: {
    virtuals: true
  }
});

/**
 * Don't use fat arrows on hooks.
 * If you use a fat arrow function to define a pre save hook,
 * it has no lexical scope and cannot be bound to a given context.
 */

schema.pre<IMessage>("save", function(this: IMessage, next: NextFunction): void {
  if (this.isNew) {
    this.created_at = Date.now();
  }
  this.updated_at = Date.now();
  next();
});

export default mongoose.model<IMessage>("Message", schema);
