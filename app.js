const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express();

const dbURI = 'mongodb+srv://montfort:1234montfort@cluster0.xuqpcpf.mongodb.net/node-course?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect()


app.listen(3000);
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use(morgan('dev'))


app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});