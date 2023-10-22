require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const userRouter = require('./routes/user.js');
const blogRouter = require('./routes/blog.js');
const cookieParser = require('cookie-parser');
const checkForAuthenticationCookie = require('./middleware/authentication.js');
const Blog = require('./models/blog.js');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb://127.0.0.1:27017/Blogify').then(() => {
  console.log('connected to db');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(checkForAuthenticationCookie('token'));
app.use(express.static(path.join(__dirname, './public')));

app.use('/user', userRouter);
app.use('/blog', blogRouter);

app.get('/', async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render('home', {
    user: req.user,
    blogs: allBlogs,

  });
});


