import { Router } from "express";
import { listServices, createService, updateService, removeService } from "../controllers/serviceController.js";
import { authenticate, authorize } from "../middleware/auth.js";

const router = Router();
router.get("/", listServices);
router.post("/", authenticate, authorize("admin"), createService);
router.put("/:id", authenticate, authorize("admin"), updateService);
router.delete("/:id", authenticate, authorize("admin"), removeService);

export default router;
