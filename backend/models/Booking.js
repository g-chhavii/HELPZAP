import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  helper: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  date: { type: Date, required: true },
  hours: { type: Number, default: 1 },
  status: { type: String, enum: ["pending","assigned","completed","cancelled"], default: "pending" },
  address: String,
  notes: String,
  paymentMethod: { type: String, enum: ["COD"], default: "COD" }
}, { timestamps: true });

export default mongoose.model("Booking", BookingSchema);
