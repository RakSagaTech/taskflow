import Task from "../models/task.model.js";

export const createTaskController = async (req, res) => {
  try {

    const {
      title,
      description,
      priority,
      status,
    } = req.body;

    const task = await Task.create({
      title,
      description,
      priority,
      status,
      createdBy: req.user.id,
    });

    return res.status(201).json({
      message: "Task created successfully",
      data: {
        task,
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

    const tasks = await Task.find({
      createdBy: req.user.id,
    }).sort({
      createdAt: -1,
    });

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


export const getTaskController = async (req, res) => {
  try {

    const { id } = req.params;

    const task = await Task.findOne({
      _id: id,
      createdBy: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.status(200).json({
      message: "Task fetched successfully",
      data: {
        task,
      },
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });

  }
};


export const updateTaskController = async (req, res) => {
  try {

    const { id } = req.params;

    const {
      title,
      description,
      priority,
      status,
    } = req.body;

    const updatedTask = await Task.findOneAndUpdate(
      {
        _id: id,
        createdBy: req.user.id,
      },
      {
        title,
        description,
        priority,
        status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.status(200).json({
      message: "Task updated successfully",
      data: {
        task: updatedTask,
      },
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });

  }
};


export const deleteTaskController = async (req, res) => {
  try {

    const { id } = req.params;

    const deletedTask = await Task.findOneAndDelete({
      _id: id,
      createdBy: req.user.id,
    });

    if (!deletedTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.status(200).json({
      message: "Task deleted successfully",
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });

  }
};