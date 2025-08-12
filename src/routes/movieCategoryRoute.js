const express = require('express')
const router = express.Router()
const {movieCategory} = require('../controllers/movieCategoryController')


router.post('/newCategory', movieCategory)


module.exports = router