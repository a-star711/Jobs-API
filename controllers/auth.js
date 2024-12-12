const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')

const register = async (req, res) => {


  const user = await User.create({ ...req.body })
  const token = user.createJWT()


  res.status(StatusCodes.CREATED).json({user:{name:user.name}, token })
}

const login = async (req, res) => {
  //  const {email, password} = req.body 

  //  if(!username || !password) {
  //   throw new BadRequestError('Please provide email and password')
  //  }

  //  const id = new Date().getDate()

  //  const token = jwt.sign({email, password}, process.env.JWT_SECRET, {expiresIn:'30d'})


  res.send('login user')
}

module.exports = {
  login,
  register,
}