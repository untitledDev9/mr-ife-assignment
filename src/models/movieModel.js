const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  categories: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'movieCategory',
    required: true
  }
},
{
  timestamps : true
})

module.exports = mongoose.model('Movies', movieSchema)