import validater from '../../methods/validater';

export default [
  {
    path: '/signin',
    method: 'post',
    handler: (req, res) => res.send('SignIn Page'),
  },
  {
    path: '/signup',
    method: 'post',
    handler: (req, res) => {
      const isValid = validater({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      });
      return res.send(isValid);
    },
  },
];
