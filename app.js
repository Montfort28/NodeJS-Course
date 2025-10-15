const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const blogRoutes = require("./routes/blogRoutes");

const dbURI =
  "mongodb+srv://montfort:1234montfort@cluster0.xuqpcpf.mongodb.net/node-course?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//routes

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
