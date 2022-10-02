import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.listen(port, () => {
  return console.log(`http://localhost:${port}`);
});
