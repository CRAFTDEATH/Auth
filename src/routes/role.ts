import { Router } from "express";
import RoleController from "../controller/RoleController";

const router = Router();

router.get("/roles", RoleController.index);
router.get("/roles/:id", RoleController.show);
router.post("/roles", RoleController.store);
router.put("/roles/:id", RoleController.update);
router.delete("/roles/:id", RoleController.destroy);

export default router;
