import Booking from "../models/Booking.js";
import User from "../models/User.js";

function hoursDiff(a, b) {
  return (a.getTime() - b.getTime()) / 36e5;
}

export async function createBooking(req, res) {
  try {
    const MIN = Number(process.env.MIN_HOURS_BEFORE_BOOKING || 2);
    const { service, date, hours, address, notes } = req.body;
    const start = new Date(date);
    const now = new Date();
    if (hoursDiff(start, now) < MIN) return res.status(400).json({ message: `Bookings must be at least ${MIN} hours in advance` });

    // Find available & approved helper atomically
    const helper = await User.findOneAndUpdate(
      { role: "helper", isApproved: true, isBlocked: false, isAvailable: true },
      { $set: { isAvailable: false } },
      { new: true }
    );
    if (!helper) return res.status(404).json({ message: "No helper available" });

    const booking = await Booking.create({
      customer: req.user.id,
      helper: helper._id,
      service,
      date: start,
      hours: hours || 1,
      address,
      notes,
      status: "assigned"
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function listBookings(req, res) {
  let filter = {};
  if (req.user.role === "customer") filter.customer = req.user.id;
  if (req.user.role === "helper") filter.helper = req.user.id;
  const bookings = await Booking.find(filter)
    .populate("service")
    .populate("helper", "name email")
    .populate("customer", "name email")
    .sort("-createdAt");
  res.json(bookings);
}

export async function setBookingStatus(req, res) {
  const { status } = req.body;
  const booking = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });
  if (!booking) return res.status(404).json({ message: "Not found" });
  if (["completed","cancelled"].includes(status) && booking.helper) {
    await User.findByIdAndUpdate(booking.helper, { isAvailable: true });
  }
  res.json(booking);
}
