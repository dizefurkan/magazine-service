import mongoose from 'mongoose';
import User from '../models/user';

mongoose.connect('mongodb://localhost/magazine');

const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', () => {
  console.log('Mongoose Connected');
});

const user = new User({
  username: 'faadssdasdadsds',
  email: 'faasdsdasdadsds',
  password: 'fasdasdadsds',
  avatar: 'fasdasdadsds',
  firstname: 'fasdasdadsds',
  lastname: 'fasdasdadsds',
});

user.save((err, res) => {
  if (err) { console.log('err', err)}
  console.log(res)
});

