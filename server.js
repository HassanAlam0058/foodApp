const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const foodRoutes = require("./routes/foodRoutes.js");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // serve images

// Connect to MongoDB
mongoose.connect(process.env.MONGODB)
.then(() => console.log("MongoDB connected".green))
.catch(err => console.log(err.red));

// Routes
app.use("/api/foods", foodRoutes);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`.cyan));