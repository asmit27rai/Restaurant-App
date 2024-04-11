import mongoose from "mongoose";
import validator from "validator";

const signup = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    minLength: [4, "First name must be of at least 3 Characters."],
    maxLength: [10, "First name cannot exceed 30 Characters."],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  password: {
    type: String,
    required: true,
  },
});

export const SignUp = mongoose.model("SignUp", signup);
