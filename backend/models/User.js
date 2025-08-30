import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["customer","helper","admin"], default: "customer" },
  phone: String,
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }], //  new field
  isApproved: { type: Boolean, default: false },  // helpers must be approved
  isBlocked: { type: Boolean, default: false },
  isAvailable: { type: Boolean, default: true }   // simple availability flag
}, { timestamps: true });

UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = function(plain) {
  return bcrypt.compare(plain, this.password);
};

export default mongoose.model("User", UserSchema);
