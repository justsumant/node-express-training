const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const userRouter = require('./routes/user-routes');
const morgan = require('morgan');

app.use(express.json());

// adding morgan middleware
app.use(morgan('dev'));

/*  adding uuid in every requiest */

// // adding uuid in each route
// app.use((req, res, next) => {
//   req.id = uuidv4();
//   next();
// });

// // adding a middleware that logs the request id
// app.use((req, res, next) => {
//   console.log(`Request id: ${req.id}`);
//   next();
// });

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.get('/about', (req, res) => {
  res.status(200).send('About page');
});

// router from separate file
app.use('/api', userRouter);

// a route that sends error for error handleling middleware using next function
app.get('/error', (req, res, next) => {
  next(new Error('Error from /error route'));
});

// invalid route handler
app.all('*', (req, res) => {
  res.status(404).send('Invalid route');
});

// eror handling middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something broke!');
});

// app.listen(3002, () => {
//   console.log('Server is running on port 3002');
// });

module.exports = app;
