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