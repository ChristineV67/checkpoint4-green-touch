import type { RequestHandler } from "express";
import { validateRegisterSchema } from "../services/validators/register.validator";

export const validateRegister: RequestHandler = (req, res, next) => {
  try {
    const result = validateRegisterSchema(req.body);

    if (!result.success) {
      res.status(401).json(result?.errors);
      return;
    }

    return next();
  } catch (error) {
    next(error);
  }
};
