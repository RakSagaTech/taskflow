import User from "../models/user.model.js";

export const getAllUsersController = async (req, res) => {
  try {

    const users = User.find({ role: "user" }).select("-password");
    
    return res.status(200).json({
      message: "Users fetched successfully",
      data: {
        users,
      },
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });

  }
};