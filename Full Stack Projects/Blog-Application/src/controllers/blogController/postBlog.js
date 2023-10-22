const Blog = require('../../models/blog');

const postBlog = async (req, res) => {
  const { title, body } = req.body;
  const blog = await Blog.create({
    body,
    title,
    CreatedBy: req.user._id,
    coverImageUrl: `/uploads/${req.file.filename}`,
  });
  return res.redirect(`/blog/${blog._id}`);
};
module.exports = postBlog;
