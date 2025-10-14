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
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"));



//routes

app.get("/", (req, res) => {
  res.redirect('/blogs')
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get('/blogs', (req, res) =>{
  Blog.find().sort({createdAt: -1})
  .then((result) =>{
    res.render('index', { title: 'all blogs', blogs: result })
  })
  .catch((err) =>{
    console.log(err)
  })
})

app.post('/blogs', (req, res) =>{
  const blog = new Blog(req.body)
  blog.save()
  .then((result) =>{
      res.redirect('/blogs')
  })
  .catch((err) =>{
    console.log(err)
  })
})

app.get('/blogs/:id', (req, res) =>{
  const id = req.params.id
  .then((result) =>{
    res.render("details", { title: "Blog Details"})
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
