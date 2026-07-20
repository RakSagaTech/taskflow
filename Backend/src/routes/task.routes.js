import express from "express";

import {
  createTaskController,
  getAllTasksController,
  getTaskController,
  updateTaskController,
  deleteTaskController,
} from "../controllers/task.controller.js";

import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";
import validate from "../middleware/validate.middleware.js";

import { taskSchema } from "../validations/task.validation.js";

const router = express.Router();

/**
 * Create Task
 */
router.post(
  "/",
  authenticate,
  authorize("user", "admin"),
  validate(taskSchema),
  createTaskController
);

/**
 * Get All Tasks
 */
router.get(
  "/",
  authenticate,
  authorize("user", "admin"),
  getAllTasksController
);

/**
 * Get Single Task
 */
router.get(
  "/:id",
  authenticate,
  authorize("user", "admin"),
  getTaskController
);

/**
 * Update Task
 */
router.put(
  "/:id",
  authenticate,
  authorize("user", "admin"),
  validate(taskSchema),
  updateTaskController
);

/**
 * Delete Task
 */
router.delete(
  "/:id",
  authenticate,
  authorize("user", "admin"),
  deleteTaskController
);

export default router;