import mongoose, { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default model("Task", TaskSchema);
