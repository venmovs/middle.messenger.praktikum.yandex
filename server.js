const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();
const PORT = 3000;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

app.use(express.static('./dist'));
app.use(limiter);
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
    directives: {
        'default-src': 'self',
        'img-src': '*',
        'script-src': 'self',
    },
}));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
