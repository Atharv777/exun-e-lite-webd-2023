const express = require('express');

const app = express();
const port = 3000;

const is_prime = (num) => {

    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const get_factors = number => Array
    .from(Array(number + 1), (item, ind) => ind)
    .filter(ind => number % ind === 0)

app.get('/number', (req, res) => {
    res.send('Go to /number/:num to check if :num is prime or composite');
});

app.get('/number/:num', (req, res) => {
    const num = parseInt(req.params.num);

    if (num < 0) {
        res.send('The number is negative');
        return;
    }

    if (num === 1) {
        res.send('The number 1 is neither prime nor composite');
        return;
    }

    if (is_prime(num)) {
        res.send(`The number ${num} is prime`);
    } else {
        const factors = get_factors(num);
        res.send(`The number ${num} is composite. It's Factors are: ${factors.join(', ')}`);
    }
});

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));
