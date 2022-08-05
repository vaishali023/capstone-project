const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide blog title'],
    trim: true,
    maxLength: [120, 'Blog name should not be more than 120 characters'],
  },
  slug: {
    type: String,
    required: [true, 'Please provide blog slug'],
    trim: true,
  },
  short_desc: {
    type: String,
    required: [true, 'Please provide blog short description'],
  },
  body: {
    type: String,
    required: [true, 'Please provide blog description'],
  },
  location: {
    type: String,
    required: [true, 'Please provide blog location'],
  },
  published: {
    type: Boolean,
    default: false,
  },
  image: {
    id: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

// user
// updatedAt

module.exports = mongoose.model('Blog', blogSchema);
