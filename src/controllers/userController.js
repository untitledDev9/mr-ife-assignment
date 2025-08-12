const User = require('../models/userModel')
const bcrypt = require('bcrypt')


exports.signUp = async (req, res) => {
  const { email, password } = req.body

  try {
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      res.status(400).json(
        {
          success: false,
          message: 'Email already in use'
        }
      )
    }
    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = await User.create({
      email,
      password : hashedPassword
    })

    await newUser.save()
    return res.status(201).json({
      success: true,
      message: 'User created',
      data : newUser
    })
  } catch (error) {
    console.log(error)
  }
}