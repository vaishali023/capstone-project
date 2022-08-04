const jwt = require('jsonwebtoken');

const User = require('../models/User');
const CustomError = require('../utils/customError');
const BigPromise = require('./bigPromise');

exports.isLoggedIn = BigPromise(async (req, res, next) => {
  const token =
    req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return next(new CustomError('Unauthorized request.', 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);

  next();
});
