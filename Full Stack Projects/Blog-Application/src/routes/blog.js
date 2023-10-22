const { Router } = require('express');
const router = Router();
const addBlog = require('../controllers/blogController/blog');
const postBlog = require('../controllers/blogController/postBlog');
const multer = require('multer');
const path = require('path');
const storage = require('../controllers/authController/storage');
const cmt = require('../controllers/blogController/comment.js');
const blogId = require('../controllers/blogController/blogId.js');


router.get('/add-new', addBlog);
router.get('/:id', blogId);
const upload = multer({ storage: storage });
router.post('/', upload.single('coverImage'), postBlog);
router.post('/comment/:blogId', cmt);

module.exports = router;
