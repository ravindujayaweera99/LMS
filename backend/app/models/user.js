const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Course', courseSchema);
