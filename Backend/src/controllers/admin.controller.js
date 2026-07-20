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


export const getUserTasksController = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const tasks = await Task.find({
      createdBy: id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      message: "User tasks fetched successfully",
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
        tasks,
      },
    });
  } catch (error) {
    console.error("Error fetching user tasks:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.role === "admin") {
      return res.status(403).json({
        message: "Admin accounts cannot be deleted",
      });
    }

    await Task.deleteMany({
      createdBy: id,
    });

    await User.findByIdAndDelete(id);

    return res.status(200).json({
      message: "User deleted successfully",
    });

  } catch (error) {
    console.error("Error deleting user:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const deleteTaskController = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.status(200).json({
      message: "Task deleted successfully",
    });

  } catch (error) {
    console.error("Error deleting task:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};