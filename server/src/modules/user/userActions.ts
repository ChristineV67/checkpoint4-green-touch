import UserRepository from "./UserRepository";
import type { RequestHandler } from "express";

const verifByEmail: RequestHandler = async (req, res, next) => {
  const email = req.body.email;

  try {
    const verifmail = await UserRepository.readEmail(email);

    if (verifmail !== null) {
      res.json({ message: "cet email existe déja" });

      return;
    }
    next();
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res) => {
  const user = req.body;

  try {
    const insertId: number = await UserRepository.create(user);

    res.status(201).json({
      insertId: insertId,
      message: "L'utilisateur a bien été crée",
    });
  } catch (e) {
    res.status(500).json({
      message: "cet email existe déja",
    });
  }
};

export default { verifByEmail, add };
