import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { connectDB } from "./config/db.js";
import User from "./models/User.js";
import Service from "./models/Service.js";
import Booking from "./models/Booking.js";

dotenv.config();

async function run() {
  await connectDB(process.env.ATLASDB_URL);
  await User.deleteMany({});
  await Service.deleteMany({});
  await Booking.deleteMany({});

  const admin = await User.create({
    name: "Admin",
    email: "admin@demo.com",
    password: "123456",
    role: "admin",
    isApproved: true
  });

  const customer = await User.create({
    name: "John Customer",
    email: "customer@demo.com",
    password: "123456",
    role: "customer",
    isApproved: true
  });

  const helper = await User.create({
    name: "Hank Helper",
    email: "helper@demo.com",
    password: "123456",
    role: "helper",
    isApproved: true,
    isAvailable: true
  });

  const services = await Service.insertMany([
    { title: "House Help", description: "Assist with household tasks", price: 50, durationHours: 2 },
    { title: "Pet Sitting", description: "Take care of your pet", price: 30, durationHours: 3 },
    { title: "Deep Cleaning", description: "Full home deep clean", price: 120, durationHours: 5 }
  ]);

  const booking = await Booking.create({
    customer: customer._id,
    helper: helper._id,
    service: services[0]._id,
    date: new Date(Date.now() + 48*60*60*1000),
    hours: 2,
    status: "assigned",
    address: "123 Demo Street",
    notes: "Ring the bell twice"
  });

  console.log("✅ Seeded users, services, bookings.");
  await mongoose.disconnect();
  process.exit(0);
}

run().catch(e => { console.error(e); process.exit(1); });
