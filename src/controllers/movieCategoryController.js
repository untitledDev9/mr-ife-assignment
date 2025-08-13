const MovieCategorySchema = require("../models/movieCategory")

exports.movieCategory = async (req,res) => {
  const {categoryName} = req.body

  try {
    const existingCategory = await MovieCategorySchema.findOne({categoryName})

    if(existingCategory) {
      res.status(400).json({
        success: false,
        message: 'Category name already exists'
      })
    }

    const newCategory = await MovieCategorySchema.create({
      categoryName
    })

    await newCategory.save()
    return res.status(201).json({
      success: true,
      message: 'Category created',
      data: newCategory
    })
  // } catch (error) {
    console.log(error)
  }
}

