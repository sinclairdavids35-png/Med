const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MedEncyclopedia Backend Running Successfully");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/articles", require("./routes/articleRoutes"));
app.use("/api/forums", require("./routes/forumRoutes"));
app.use("/api/jokes", require("./routes/jokeRoutes")); // Add joke routes

// FIX: Proper async error handling on startup
const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

module.exports = app;
