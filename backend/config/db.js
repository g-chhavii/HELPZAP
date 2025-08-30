import mongoose from "mongoose";
const express = import("express");


export async function connectDB(uri) {
  try {
    await mongoose.connect(uri, { dbName: "service_app" });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}
