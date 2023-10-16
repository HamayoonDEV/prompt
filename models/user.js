import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: [true, "username is required"] },
    email: {
      type: String,
      unique: true, // Updated this to be a Boolean
      required: [true, "email is required!"],
    },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

// Check if the model is already registered, if not then define it
let User;
if (mongoose.models.User) {
  User = mongoose.models.User; // Consistently access using models property
} else {
  User = mongoose.model("User", userSchema, "users");
}

export default User;
