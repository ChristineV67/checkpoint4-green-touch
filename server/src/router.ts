import express from "express";

const router = express.Router();

import planteActions from "./modules/Plante/planteActions";

import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

router.post("/api/plantes", planteActions.add);
router.get("/api/plantes", planteActions.browsePlant);
router.get("/api/plantes/:id", planteActions.read);

export default router;
