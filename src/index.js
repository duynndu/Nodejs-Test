const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

app.get('/', (req, res) => {
  res.render('home');
  console.log(req.query);
  console.log(req.body);
});

app.post('/', (req, res) => {
  res.render('home');
  console.log(req.query);
});
        app.get('/news', (req, res) => {
  res.render('news');
  console.log('body' + req.body);
});
        app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
