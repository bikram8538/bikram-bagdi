require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const contactRoutes = require("./routes/contact.routes");

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

console.log(process.env.EMAIL_USER);
console.log(process.env.PORT);