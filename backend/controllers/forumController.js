const Forum = require("../models/Forum");

// FIX: Added input validation and proper error handling
const createForumPost = async (req, res) => {
  try {
    const { topic, message } = req.body;

    // Validate input
    if (!topic || !message) {
      return res.status(400).json({
        message: "Please provide both topic and message",
      });
    }

    // Validate user authentication
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    const post = await Forum.create({
      topic,
      message,
      user: req.user._id,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      message: "Server error creating forum post",
      error: error.message,
    });
  }
};

// FIX: Added error handling
const getForumPosts = async (req, res) => {
  try {
    const posts = await Forum.find().populate("user", "name email");

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Server error fetching forum posts",
      error: error.message,
    });
  }
};

module.exports = {
  createForumPost,
  getForumPosts,
};
