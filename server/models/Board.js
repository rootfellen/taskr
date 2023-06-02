import mongoose, { Schema, model } from "mongoose";

const BoardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  stages: [
    {
      name: {
        type: String,
        required: true,
      },
      tasks: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Task",
        },
      ],
    },
  ],
});

export default model("Board", BoardSchema);
