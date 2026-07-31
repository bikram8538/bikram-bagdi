require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const contactRoutes = require("./routes/contact.routes");

const app = express();

const PORT = process.env.PORT || 5000;

// ======================
// Middleware
// ======================

app.use(cors());
app.use(helmet());
app.use(express.json());

// ======================
// Routes
// ======================

app.get("/", (req, res) => {
    res.send("Welcome to Bikram's Portfolio API");
});

app.get("/about", (req, res) => {
    res.json({
        name: "Bikram Bagdi",
        role: "Frontend & WordPress Developer",
    });
});

app.use("/api", contactRoutes);

// ======================
// 404 Route
// ======================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

// ======================
// Start Server
// ======================

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});