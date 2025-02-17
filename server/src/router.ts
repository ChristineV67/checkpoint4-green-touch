import express from "express";

const router = express.Router();

import planteActions from "./modules/Plante/planteActions";

import itemActions from "./modules/item/itemActions";
import { validateRegister } from "./middlewares/validate.middleware";
import userActions from "./modules/user/userActions";
import { hashPassword } from "./middlewares/auth.middleware";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

router.post("/api/plantes", planteActions.add);
router.get("/api/plantes", planteActions.browsePlant);
router.get("/api/plantes/:id", planteActions.read);

router.post("/api/register", hashPassword, validateRegister, userActions.add);

export default router;
