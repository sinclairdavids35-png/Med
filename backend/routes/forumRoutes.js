const express = require("express");
const router = express.Router();

const {
  createForumPost,
  getForumPosts,
} = require("../controllers/forumController");

const protect = require("../middleware/authMiddleware");

router.get("/", getForumPosts);
router.post("/", protect, createForumPost);

module.exports = router;
