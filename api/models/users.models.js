import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const userSchema = new model("users", schema);