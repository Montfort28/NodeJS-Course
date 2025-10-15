const Blog = require("../models/blog");

const blog_index = (req, res) => {
Blog.find().sort({createdAt: -1})
  .then((result) =>{
    res.render('index', { title: 'all blogs', blogs: result })
  })
  .catch((err) =>{
    console.log(err)
  })
}

module.exports = {
    blog_index
}