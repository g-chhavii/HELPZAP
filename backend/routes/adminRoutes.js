import { Router } from "express";
import { authenticate, authorize } from "../middleware/auth.js";
import { listHelpers, approveHelper, blockHelper, unblockHelper } from "../controllers/adminController.js";
// routes/adminRoutes.js
import { getPendingHelpers, approveHelper } from "../controllers/adminController.js";
import { authMiddleware, adminMiddleware } from "../middleware/auth.js";

const router = Router();
router.get("/helpers", authenticate, authorize("admin"), listHelpers);
router.patch("/helpers/:id/approve", authenticate, authorize("admin"), approveHelper);
router.patch("/helpers/:id/block", authenticate, authorize("admin"), blockHelper);
router.patch("/helpers/:id/unblock", authenticate, authorize("admin"), unblockHelper);
// Get all unapproved helpers
router.get("/pending-helpers", authMiddleware, adminMiddleware, getPendingHelpers);

// Approve a helper
router.put("/approve-helper/:id", authMiddleware, adminMiddleware, approveHelper);



export default router;
