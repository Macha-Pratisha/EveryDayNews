import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import path from "path";
import managerRoutes from "./routes/managerRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
dotenv.config();
const app = express();
import deliveryRoutes from "./routes/deliveryRoutes.js";
import managerPublicationRoutes from "./routes/managerPublicationsRoutes.js";
import customerPublicationRoutes from "./routes/customerPublicationRoutes.js";
import customerSubscriptionRoutes from "./routes/customerSubscriptionRoutes.js";
import managerNotificationRoutes from "./routes/managerNotificationRoutes.js";
import billRoutes from "./routes/billRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";


// Ensure uploads folder exists
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use("/uploads", express.static(uploadDir));

// Routes
app.use("/api/manager", managerRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/delivery", deliveryRoutes);

app.use("/api/manager/publications", managerPublicationRoutes);
app.use("/api/customer/publications", customerPublicationRoutes);
app.use("/api/customer/subscriptions", customerSubscriptionRoutes);
app.use("/api/manager/notifications", managerNotificationRoutes);
app.use("/api/customer/bills", billRoutes);
app.use("/api/notes", noteRoutes);


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
