const mongoose = require('mongoose')

const movieCategorySchema = new mongoose.Schema({
  categoryName : {
    type: String,
    require: true,
    unique: true
  },
},{
  timestamps: true,
})


module.exports = mongoose.model('movieCategory', movieCategorySchema)