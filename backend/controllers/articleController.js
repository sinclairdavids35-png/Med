const Article = require("../models/Article");

// FIX: Added input validation and proper error handling
const createArticle = async (req, res) => {
  try {
    const { title, content, category } = req.body;

    // Validate input
    if (!title || !content || !category) {
      return res.status(400).json({
        message: "Please provide all required fields: title, content, category",
      });
    }

    // Validate user authentication
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    const article = await Article.create({
      title,
      content,
      category,
      author: req.user._id,
    });

    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({
      message: "Server error creating article",
      error: error.message,
    });
  }
};

// FIX: Added error handling
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate("author", "name email");

    res.json(articles);
  } catch (error) {
    res.status(500).json({
      message: "Server error fetching articles",
      error: error.message,
    });
  }
};

module.exports = {
  createArticle,
  getArticles,
};
