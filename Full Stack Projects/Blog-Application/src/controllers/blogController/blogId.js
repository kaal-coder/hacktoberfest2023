const Blog = require('../../models/blog');
const Comment = require('../../models/comment');

const blogId = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('CreatedBy');
  const comments = await Comment.find({ blogId: req.params.id }).populate(
    'createdBy'
  );
  return res.render('blog', {
    user: req.user,
    blog,
    comments,
  });
};

module.exports = blogId;
