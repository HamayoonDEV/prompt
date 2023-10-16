import mongoose from "mongoose";

const { Schema } = mongoose;

const promptSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    prompt: { type: String, required: [true, "prompt is required!"] },
    tag: { type: String, required: [true, "tag is required!"] },
  },
  {
    timestamps: true,
  }
);

// Check if the model is already registered, if not then define it
let Prompt;
if (mongoose.models.Prompt) {
  Prompt = mongoose.models.Prompt; // consistent access using models property
} else {
  Prompt = mongoose.model("Prompt", promptSchema, "prompts");
}

export default Prompt;
