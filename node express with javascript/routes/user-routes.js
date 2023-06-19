const express = require('express');
const router = express.Router();
const userController = require('./controllers/user-controller');

/* returning from the router itself*/
router
  .route('/') // .route() method is used to chain the routes
  .get((req, res) => {
    res.status(200).send('send a user');
  })
  // chaining the route
  .post((req, res) => {
    res.status(200).send('send a user');
  });

/* using controller to return the response */
router.route('/get-users').get(userController.getAllUsers);

// single route does not need .route() method
router.get('/get-user', userController.getUser);

module.exports = router;
