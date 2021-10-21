const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

app.use(express.static(`${__dirname}/dist`));
app.use(limiter);
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
    directives: {
        'default-src': 'self',
        'img-src': '*',
        'script-src': 'self',
    },
}));

app.use('/*', (request, response) => {
    response.status(404).redirect('/');
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
