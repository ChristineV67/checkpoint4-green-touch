import type { RequestHandler } from "express";
import { hashPasswordHelper } from "../services/argon/argon.helper";

export const hashPassword: RequestHandler = async (req, res, next) => {
  const { password } = req.body;

  try {
    const newPassword: string = await hashPasswordHelper(password);

    if (newPassword) {
      req.body.password = newPassword;
      next();
    }
  } catch (e) {
    res.status(500).json({
      message: "Argon is broken !",
    });
  }
};
