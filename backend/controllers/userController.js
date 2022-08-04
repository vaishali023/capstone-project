const User = require('../models/User');
const BigPromise = require('../middlewares/bigPromise');
const CustomError = require('../utils/customError');
const cookieToken = require('../utils/cookieToken');
const cloudinary = require('cloudinary');

exports.signup = BigPromise(async (req, res, next) => {
  let result;

  if (req.files) {
    let file = req.files.photo;
    result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
      folder: 'users',
      width: 150,
      crop: 'scale',
    });
  }

  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return next(new CustomError('Name, Email and Password are required', 400));
  }

  const photo = result && {
    id: result.public_id,
    secure_url: result.secure_url,
  };

  const user = await User.create({
    name,
    email,
    password,
    photo,
  });

  cookieToken(user, res);
});

exports.login = BigPromise(async (req, res, next) => {
  const { email, password } = req.body;

  //check if email and password exists
  if (!email || !password) {
    return next(new CustomError('Please provide email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new CustomError('Invalid Email or Password.', 400));
  }

  const isPasswordCorrect = await user.isValidPassword(password);

  if (!isPasswordCorrect) {
    return next(new CustomError('Invalid Email or Password.', 400));
  }

  cookieToken(user, res);
});

exports.logout = BigPromise(async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: 'Logout success',
  });
});

exports.getLoggedInUserDetails = BigPromise(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});
