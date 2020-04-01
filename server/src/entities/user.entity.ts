import mongoose, { Schema, Document } from "mongoose";
import { NextFunction } from "express";
import { IMessage } from "./message.entity";

export interface IUser extends Document {
  username: string;
  messages: Array<IMessage>;
  created_at: Number;
  updated_at: Number;
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
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

/**
 * Don't use fat arrows on hooks.
 * If you use a fat arrow function to define a pre save hook,
 * it has no lexical scope and cannot be bound to a given context.
 */

schema.pre<IUser>("save", function(this: IUser, next: NextFunction): void {
  if (this.isNew) {
    this.created_at = Date.now();
  }
  this.updated_at = Date.now();
  next();
});

export default mongoose.model<IUser>("User", schema);
