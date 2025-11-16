EveryDayNews Portal

A full-stack MERN application with multiple portals for managing and delivering news subscriptions. This project includes Manager, Customer, and Delivery portals, along with a main frontend for landing pages. It supports real-time geolocation tracking for delivery personnel and REST API endpoints tested with Postman.

Quick Start

Follow these commands to set up and run the backend and all frontends quickly:

# Clone repository
git clone https://github.com/<your-username>/EveryDayNews.git
cd EveryDayNews

# Install dependencies for backend and all frontends
cd backend && npm install
cd ../Manager-Portal && npm install
cd ../Customer-Portal && npm install
cd ../Delivery-Portal && npm install
cd ../main-frontend && npm install

# Start backend
cd ../backend
npm run dev

# In separate terminals, start each frontend
cd ../Manager-Portal && npm start
cd ../Customer-Portal && npm start
cd ../Delivery-Portal && npm start
cd ../main-frontend && npm start

Technologies

Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (Atlas or Local)

Geolocation Tracking: Browser Geolocation API

Testing API: Postman

Version Control: Git/GitHub

Project Structure
EveryDayNews/
│
├─ backend/                 # Node.js + Express backend
│   ├─ controllers/
│   ├─ models/
│   ├─ routes/
│   ├─ config/
│   └─ server.js
│
├─ Manager-Portal/          # React frontend for Manager
├─ Customer-Portal/         # React frontend for Customers
├─ Delivery-Portal/         # React frontend for Delivery personnel
├─ main-frontend/           # Main landing page frontend
└─ README.md

Environment Variables

Create a .env file in the backend/ folder:

PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
GEOCODE_API_KEY=<if using any external geolocation API>

Running the Application

Start the backend server:

cd backend
npm run dev


Start any frontend portal:

cd Manager-Portal
npm start


Repeat for Customer-Portal, Delivery-Portal, and main-frontend.

Working Procedure

Manager Portal:

Managers can create and manage publications.

View subscriptions and customer details.

Track delivery personnel via geolocation.

Customer Portal:

Customers can register and subscribe to publications.

View subscription history and payments.

Delivery Portal:

Delivery personnel can view assigned delivery tasks.

Share real-time location for tracking deliveries.

Update delivery status (completed/pending).

Main Frontend:

Serves as the landing page for visitors.

Links to Manager, Customer, and Delivery portals.

Display general information about publications.

Backend:

Provides RESTful APIs for all operations.

Authentication handled via JWT.

Handles CRUD operations for users, publications, and deliveries.

Validates geolocation data for real-time tracking.

API Testing

Use Postman to test backend endpoints:

POST /api/auth/login – Manager/Customer login

POST /api/customers – Create customer

GET /api/publications – Fetch all publications

POST /api/delivery/track – Update delivery geolocation

Export Postman collection from /backend/postman_collection.json (if available).

Features

Multi-portal system: Manager, Customer, Delivery

Real-time geolocation tracking

Secure JWT-based authentication

Modular MERN architecture

REST API tested with Postman

License

This project is licensed under the MIT License.
