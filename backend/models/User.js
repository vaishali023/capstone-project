const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    maxLength: [40, 'Name should be under 40 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    validate: [validator.isEmail, 'Please enter a valid email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minLength: [6, 'Password should be atleast 6 characters'],
    select: false,
  },
  role: {
    type: String,
    default: 'user',
  },
  photo: {
    id: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//encrypt password before save
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//validate the password with passed on user password
userSchema.methods.isValidPassword = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

//create and return jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

//generate forgot password token (string)
userSchema.methods.getForgotPasswordToken = function () {
  //generate long and random string
  const forgotPasswordToken = crypto.randomBytes(20).toString('hex');

  //getting a hash- make sure to get a hash on backend
  this.forgotPasswordToken = crypto
    .createHash('sha256')
    .update(forgotPasswordToken)
    .digest('hex');

  //token expiry
  this.forgotPasswordExpiry = Date.now() + 20 * 60 * 1000;

  return forgotPasswordToken
};

module.exports = mongoose.model('User', userSchema);
