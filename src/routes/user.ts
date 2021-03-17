import { Router } from "express";
import UserController from "../controller/UserController";

const router = Router();

router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
router.post("/users", UserController.store);
router.put("/user/:id", UserController.update);
router.delete("/users/:id", UserController.destroy);

export default router;
