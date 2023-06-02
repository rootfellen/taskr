import mongoose, { Schema } from "mongoose";

const GoalSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model("Goal", GoalSchema);
