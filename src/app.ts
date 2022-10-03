import express from 'express';
import { getFeeds } from './data';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const feedData = getFeeds();
  const barData = {
    "whales": {
      "total": 1250,
      "estProfit": 781.9,
      "estProfitPercent": 54.05,
      "estLoss": 781.9,
      "estLossPercent": 42.16,
      "gasFees": 781.9,
      "gasFeesPercent": 7,
      "bought": 781.9,
      "boughtPercent": 66.76,
      "sold": 781.9,
      "soldPercent": 19.19,
      "transferred": 781.9,
      "transferredPercent": 2.7,
      "listed": 781.9,
      "listedPercent": 19.19
    }
  }
  res.render('pages/index', {feedData, barData});
});

app.listen(port, () => {
  return console.log(`http://localhost:${port}`);
});
