import express from "express";

import {
  registerUserController,
  loginUserController,
} from "../controllers/auth.controller.js";

import validate from "../middleware/validate.middleware.js";

import {
  registerSchema,
  loginSchema,
} from "../validations/auth.validation.js";

const router = express.Router();

router.post(
  "/register",
  validate(registerSchema),
  registerUserController
);

router.post(
  "/login",
  validate(loginSchema),
  loginUserController
);

export default router;