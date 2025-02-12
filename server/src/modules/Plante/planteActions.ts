import type { RequestHandler } from "express";
import PlanteRepository from "./PlanteRepository";

const add: RequestHandler = async (req, res, next) => {
  const newItem = req.body;

  try {
    const insertId = await PlanteRepository.create(newItem);
    res.json(newItem);
  } catch (err) {
    next(err);
  }
};
const browsePlant: RequestHandler = async (req, res, next) => {
  try {
    const plant = await PlanteRepository.readAll();
    res.json(plant);
  } catch (err) {
    next(err);
  }
};

export default { add, browsePlant };
