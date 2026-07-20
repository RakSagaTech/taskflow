import User from "../models/user.model.js";
import Task from "../models/task.model.js";

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


export const getUserController = async (req, res) => {
  try {

    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      data: {
        user,
      },
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });

  }
};


export const getAllTasksController = async (req, res) => {
  try {

    const tasks = await Task.find()
      .populate("createdBy", "username email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Tasks fetched successfully",
      data: {
        tasks,
      },
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });

  }
};