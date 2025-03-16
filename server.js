const express = require('express');
const path = require('path');

const app = express();
const port = 5500;

const quotes = [
    "I think, therefore I am. (Cogito, Ergo Sum) – René Descartes",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Act as if what you do makes a difference. It does. – William James",
    "Dream big and dare to fail. – Norman Vaughan",
    "Opportunities don't happen. You create them. – Chris Grosser",
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Do what you love and success will follow. – Oprah Winfrey",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Success is getting what you want. Happiness is wanting what you get. – Dale Carnegie",
    "Not all those who wander are lost. - J.R.R Tolkein"
  ];

app.use(express.static('public'));

app.get('/quotes', (req, res) => {
    const randQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log('Sending quote')
    res.json({ randQuote: randQuote});
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(port, () => {
    console.log(`Server running at  port:${port}`)
})