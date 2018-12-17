import User from '../../models/user';
import validater from '../../methods/validater';

export default [
  {
    path: '/auth/signup',
    method: 'post',
    handler: (req, res) => {
      const {
        email,
        password,
        username,
        firstname,
        lastname,
      } = req.body;
      const formValidation = validater({
        email,
        password,
        username,
        firstname,
        lastname
      });

      if (formValidation) return res.send(formValidation)
      User.create({
        email,
        password,
        username,
        firstname,
        lastname
      }, (err, result) => {
        if (err) {
          return res.send({ success: false, error: err })
        }
        return res.send(result);
      });
    },
  }
]