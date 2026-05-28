const mongoose = require("mongoose");

const forumSchema = mongoose.Schema(
  {
    topic: {
      type: String,
      required: [true, "Please add a topic"],
    },
    message: {
      type: String,
      required: [true, "Please add a message"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Forum", forumSchema);
