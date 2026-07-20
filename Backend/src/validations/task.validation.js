import Joi from 'joi';

const title = Joi.string()
  .trim()
  .min(3)
  .max(100)
  .required()
  .messages({
    "string.empty": "Task title is required",
    "string.min": "Task title must be at least 3 characters",
    "string.max": "Task title cannot exceed 100 characters",
  });


const description = Joi.string()
  .trim()
  .min(3)
  .max(500)
  .required()
  .messages({
    "string.empty": "Task description is required",
    "string.min": "Task description must be at least 3 characters",
    "string.max": "Task description cannot exceed 500 characters",
  });

const priority = Joi.string()
  .valid("low", "medium", "high")
  .required()
  .messages({
    "any.only": "Priority must be low, medium, or high",
    "string.empty": "Priority is required",
  });

const status = Joi.string()
  .valid("to-do", "in-progress", "completed")
  .required()
  .messages({
    "any.only": "Status must be to-do, in-progress, or completed",
    "string.empty": "Status is required",
  });


export const taskSchema = Joi.object({
  title,
  description,
  priority,
  status,
});