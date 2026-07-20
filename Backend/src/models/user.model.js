import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      minlength: [4, "Username must be at least 4 characters"],
      maxlength: [20, "Username cannot exceed 20 characters"],
      required: [true, "Username is required"],
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      required: [true, "Email is required"],
      match: [
        /^\S+@\S+\.\S+$/,
        "Please enter a valid email address",
      ],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
  },
  {
    timestamps: true
  }
);


const User = mongoose.model("User", userSchema);

export default User;