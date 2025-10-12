const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const app = express();

const dbURI =
  "mongodb+srv://montfort:1234montfort@cluster0.xuqpcpf.mongodb.net/node-course?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 2",
    body: "about new blog 2",
    snippet: "more about new blog 2",
  });
  blog.save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) =>{
  Blog.find()
  .then((result) =>{
    res.send(result)
  })
  .catch((err) =>{
    console.log(err)
  })
})

app.get('/single-blog', (req, res) =>{
  Blog.findById('68ec24c27017b561758bc5f7')
  .then((result) =>{
    res.send(result)
  })
  .catch((err) =>{
    console.log(err)
  })
})











app.get("/", (req, res) => {
  res.redirect('/blogs')
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get('/blogs', (req, res) =>{
  Blog.find()
  .then((result) =>{
    res.render('index', { title: 'all blogs', blogs: result })
  })
  .catch((err) =>{
    console.log(err)
  })
})
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
