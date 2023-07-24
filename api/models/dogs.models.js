import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: { type: String, require: true },
    age: { type: String, require: true },
    description: { type: String, require: true },
    size: { type: String, require: true },
    thumbnail: { type: String, require: true },
    status: { type: String, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const dogsSchema = new model("dogs", schema);
