import mongoose, { Schema, Document } from "mongoose";
import { NextFunction } from "express";
import { IMessage } from "./message.entity";
import { IUser } from "./user.entity";

export interface IRoom extends Document {
  name: string;
  messages: Array<IMessage>;
  users: Array<IUser>;
  created_at: Number;
  updated_at: Number;
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
  }],
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

schema.pre<IRoom>("save", function(this: IRoom, next: NextFunction): void {
  if (this.isNew) {
    this.created_at = Date.now();
  }
  this.updated_at = Date.now();
  next();
});


export default mongoose.model<IRoom>("Room", schema);
