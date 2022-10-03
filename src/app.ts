import express from 'express';
import { getFeeds, getStats } from './data';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const feedData = getFeeds();
  const barData = getStats();
  res.render('pages/index', { feedData, barData });
});

app.listen(port, () => {
  return console.log(`http://localhost:${port}`);
});
