exports.getAllUsers = (req, res) => {
  res.status(200).json({
    message: 'get all users',
    status: 'success',
    data: [
      {
        id: 1,
        name: 'John Doe',
        email: '',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: '',
      },
    ],
  });
};

exports.getUser = (req, res) => {
  res.status(200).json({
    message: 'get a user',
    status: 'success',
    data: {
      id: 1,
      name: 'John Doe',
      email: '',
    },
  });
};

// a controller method to return a user in route parameter
