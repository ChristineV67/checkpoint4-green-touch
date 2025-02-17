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

const read: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idPlant = await PlanteRepository.read(Number(id));

    if (idPlant == null) {
      res.sendStatus(404);
    } else {
      res.json(idPlant);
    }
  } catch (err) {
    next(err);
  }
};

export default { add, browsePlant, read };
