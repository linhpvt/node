const express = require('express'); // createApplication() function
const cookieParserMiddleware = require('cookie-parser');
const fs = require('fs');
const path = require('path');
// init our application
const app = express();

// environment variables
const PORT = process.env.PORT || 3000;

/* MIDDLEWARES  */

/* to use middleware, we have to call app.use */

// in this case, we use a built-in express middleware to serve all static files.
// every request start with /assets will be mapped to /public folder

// #1
app.use('/assets', express.static(path.resolve(__dirname, '../../public')));

/* THIRD-PARTY MIDDLEWARE */

// #2
app.use(cookieParserMiddleware());

/* CUSTOME MIDDLEWARE */

// #3
app.use('/', (req, res, next) => {
  console.log('Middleware for all requests: ', req.url, req.cookies);

  // IMPORTANT: you have to call next() to pass down the process to the next handles
  next();
});

// GET method
// root route
app.get('/', (req, res) => {
  fs.createReadStream(path.resolve(__dirname, '../index.html'), {
    encoding: 'utf-8',
    autoClose: true,
  }).pipe(res);
});

app.listen(PORT, () => console.log(`Server started at: ${PORT}`));
