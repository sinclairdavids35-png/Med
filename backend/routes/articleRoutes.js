const express = require("express");
const router = express.Router();

const {
  createArticle,
  getArticles,
} = require("../controllers/articleController");

const protect = require("../middleware/authMiddleware");

router.get("/", getArticles);
router.post("/", protect, createArticle);

module.exports = router;
