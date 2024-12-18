const jwt = require('jsonwebtoken')
const { UnauthenticatedError} = require('../errors')

const authenticationMiddleware = async (req,res,next) => {
  const authHeader = req.headers.authorization;

  console.log('Authorization Header:', authHeader); 
  if(!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Authentication ivalid')
  }

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    //attach the user to the job routes

    req.user = { userId: payload.userId, name: payload.name };
    console.log('User Attached to Request:', req.user); 

    next()
    
  } catch (error) {
    console.error('JWT Verification Error:', error.message); 
    throw new UnauthenticatedError('Not authorized to use this route')
    
  }
}

module.exports = authenticationMiddleware