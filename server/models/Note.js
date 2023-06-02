import mongoose, { Schema, model } from "mongoose";
import Notes from "../../client/src/components/Pages/Notes/Notes";

const NoteSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model("Note", NoteSchema);
