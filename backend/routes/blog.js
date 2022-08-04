const express = require('express');
const router = express.Router();

const {
  addBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} = require('../controllers/blogController');
const { isLoggedIn } = require('../middlewares/user');

//user
router.route('/blogs').get(getAllBlogs);
router.route('/blogs/:id').get(getBlogById);

//admin
router.route('/blog/add').post(isLoggedIn, addBlog);
router.route('/blog/update/:id').put(isLoggedIn, updateBlogById);
router.route('/blog/delete/:id').delete(isLoggedIn, deleteBlogById);

module.exports = router;
