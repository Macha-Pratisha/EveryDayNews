// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import fs from "fs";
// import path from "path";
// import managerRoutes from "./routes/managerRoutes.js";
// import customerRoutes from "./routes/customerRoutes.js";
// dotenv.config();
// const app = express();
// import deliveryRoutes from "./routes/deliveryRoutes.js";
// import managerPublicationRoutes from "./routes/managerPublicationsRoutes.js";
// import customerPublicationRoutes from "./routes/customerPublicationRoutes.js";
// import customerSubscriptionRoutes from "./routes/customerSubscriptionRoutes.js";
// import managerNotificationRoutes from "./routes/managerNotificationRoutes.js";
// import billRoutes from "./routes/billRoutes.js";
// import noteRoutes from "./routes/noteRoutes.js";

// const __dirname = path.resolve();
// // Ensure uploads folder exists
// const uploadDir = path.join(process.cwd(), "uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }
// const allowedOrigins = [
//   "http://localhost:8080",
//   "http://localhost:8081",
//   "http://localhost:8082",
//   "http://localhost:5173"
// ];
// // Middleware
// app.use(cors({
//   origin: function(origin, callback) {
//     if (!origin) return callback(null, true); // allow Postman, server-to-server
//     if (allowedOrigins.indexOf(origin) === -1) {
//       return callback(new Error("CORS not allowed for this origin"), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve uploaded files
// app.use("/uploads", express.static(uploadDir));

// // Routes
// app.use("/api/manager", managerRoutes);
// app.use("/api/customer", customerRoutes);
// app.use("/api/delivery", deliveryRoutes);

// app.use("/api/manager/publications", managerPublicationRoutes);
// app.use("/api/customer/publications", customerPublicationRoutes);
// app.use("/api/customer/subscriptions", customerSubscriptionRoutes);
// app.use("/api/manager/notifications", managerNotificationRoutes);
// app.use("/api/customer/bills", billRoutes);
// app.use("/api/notes", noteRoutes);

// app.use(express.static(path.join(__dirname,"../main-frontend/dist")));
// app.get("*",(req,res)=>{
//   res.sendFile(path.join(__dirname,"../main-frontend/dist/index.html"));
// });
// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ MongoDB Error:", err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import path from "path";

// Import routes
import managerRoutes from "./routes/managerRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import deliveryRoutes from "./routes/deliveryRoutes.js";
import managerPublicationRoutes from "./routes/managerPublicationsRoutes.js";
import customerPublicationRoutes from "./routes/customerPublicationRoutes.js";
import customerSubscriptionRoutes from "./routes/customerSubscriptionRoutes.js";
import managerNotificationRoutes from "./routes/managerNotificationRoutes.js";
import billRoutes from "./routes/billRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();
const app = express();
const __dirname = path.resolve();

// ------------------ Uploads ------------------
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// ------------------ Middleware ------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(uploadDir));

// ------------------ Dev / Production Handling ------------------
if (process.env.NODE_ENV !== "production") {
  // Dev: enable CORS for local frontend ports
  app.use(cors({
    origin: [
      "http://localhost:8080",
      "http://localhost:8081",
      "http://localhost:8082",
      "http://localhost:5173"
    ],
    credentials: true
  }));
} else {
  // Production: serve frontends from dist folders

  // Main frontend (landing page)
  app.use(express.static(path.join(__dirname, "../main-frontend/dist")));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../main-frontend/dist/index.html"));
  });

  // Manager Portal
  app.use("/manager", express.static(path.join(__dirname, "../Manager-Portal/dist")));
  app.get(/^\/manager\/.*$/, (req, res) => {
    res.sendFile(path.join(__dirname, "../Manager-Portal/dist/index.html"));
  });

  // Customer Portal
  app.use("/customer", express.static(path.join(__dirname, "../Customer-Portal/dist")));
  app.get(/^\/customer\/.*$/, (req, res) => {
    res.sendFile(path.join(__dirname, "../Customer-Portal/dist/index.html"));
  });

  // Delivery Portal
  app.use("/delivery", express.static(path.join(__dirname, "../Delivery-Portal/dist")));
  app.get(/^\/delivery\/.*$/, (req, res) => {
    res.sendFile(path.join(__dirname, "../Delivery-Portal/dist/index.html"));
  });
}

// ------------------ API Routes ------------------
app.use("/api/manager", managerRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/delivery", deliveryRoutes);
app.use("/api/manager/publications", managerPublicationRoutes);
app.use("/api/customer/publications", customerPublicationRoutes);
app.use("/api/customer/subscriptions", customerSubscriptionRoutes);
app.use("/api/manager/notifications", managerNotificationRoutes);
app.use("/api/customer/bills", billRoutes);
app.use("/api/notes", noteRoutes);

// ------------------ MongoDB Connection ------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// ------------------ Start Server ------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
