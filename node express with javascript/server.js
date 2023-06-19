const app = require('./app');
require('dotenv').config();

// get port from environment variable
const port = process.env.PORT || 3004;

// creating and starting server at port 3000
const server = app.listen(port, () => {
  console.log('Server is running on port 3004');
});
