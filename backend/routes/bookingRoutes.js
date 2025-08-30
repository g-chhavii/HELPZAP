import { Router } from "express";
import { authenticate } from "../middleware/auth.js";
import { createBooking, listBookings, setBookingStatus } from "../controllers/bookingController.js";

const router = Router();
router.post("/", authenticate, createBooking);
router.get("/", authenticate, listBookings);
router.patch("/:id/status", authenticate, setBookingStatus);

export default router;
