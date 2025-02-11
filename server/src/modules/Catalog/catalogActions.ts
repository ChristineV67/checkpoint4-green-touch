import CatalogRepository from "./CatalogRepository";
import { RequestHandler } from "express";

const add: RequestHandler = async (req, res, next) => {
  const newItem = req.body;

  try {
    const insertId = await CatalogRepository.create(newItem);
    res.json(newItem);
  } catch (err) {
    next(err);
  }
};

export default { add };
