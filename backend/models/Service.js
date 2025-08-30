import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  durationHours: { type: Number, default: 1 },
  active: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Service", ServiceSchema);
