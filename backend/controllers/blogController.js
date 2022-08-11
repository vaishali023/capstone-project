const Blog = require('../models/Blog');
const BigPromise = require('../middlewares/bigPromise');
const CustomError = require('../utils/customError');
const cloudinary = require('cloudinary');
const WhereClause = require('../utils/whereClause');

//User only controller

exports.getAllBlogs = BigPromise(async (req, res, next) => {
  // const resultPerPage = 6;

  // let blogs = new WhereClause(Blog.find().populate('author'), req.query).search().filter();

  let blogs = new WhereClause(Blog.find().populate('author'), req.query).search().filter();
  // let blogs = await Blog.find()
  // blogs.pager(resultPerPage);
  blogs = await blogs.base;

  // blogs.pager(resultPerPage);
  // blogs = await blogs.base;

  // const blogsCount = blogs.length;

  res.status(200).json({
    success: true,
    blogs,
    // totalBlogs: blogsCount,
  });
});

exports.getLatestBlogs = BigPromise(async (req, res, next) => {
  let blogs = new WhereClause(Blog.find().sort({$natural: -1}).limit(3).populate('author'), req.query).search().filter();
  
  blogs = await blogs.base;
console.log(blogs);
  res.status(200).json({
    success: true,
    blogs,
  });
});


exports.getBlogById = BigPromise(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new CustomError('No blog found with this ID', 401));
  }

  res.status(200).json({
    success: true,
    blog,
  });
});



//Admin only controllers

exports.addBlog = BigPromise(async (req, res, next) => {
  //image
  if (!req.files) {
    return next(new CustomError('images are required', 401));
  }

  let file = req.files.image;
  let result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
    folder: 'blogs',
  });

  const image = result && {
    id: result.public_id,
    secure_url: result.secure_url,
  };

  req.body.image = image;
  req.body.author = req.user.id;

  const blog = await Blog.create(req.body);

  res.status(201).json({
    success: true,
    blog,
  });
});

exports.updateBlogById = BigPromise(async (req, res, next) => {
  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new CustomError('No blog found with this ID', 401));
  }

  if (req.files) {
    //destroy image
    await cloudinary.v2.uploader.destroy(blog.image.id);
    //update image
    let file = req.files.image;
    let result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
      folder: 'blogs',
    });
    const image = result && {
      id: result.public_id,
      secure_url: result.secure_url,
    };
    req.body.image = image;
  }

  blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    blog,
  });
});

exports.deleteBlogById = BigPromise(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new CustomError('No blog found with this ID', 401));
  }

  await cloudinary.v2.uploader.destroy(blog.image.id);

  await blog.remove();

  res.status(200).json({
    success: true,
    message: 'Blog is deleted',
  });
});


exports.searchBlog = BigPromise(async (req, res, next) =>{

  const result = await Blog.find({
        location:{$regex:req.params.key}
  })

  if (!result) {
    return next(new CustomError('No blog found for this location', 401));
  }

  res.status(200).json({
    success: true,
    result,
  });
});