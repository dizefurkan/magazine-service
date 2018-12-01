import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/magazine', { useNewUrlParser: true });

const conn = mongoose.connection;

// eslint-disable-next-line
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', () => {
  // eslint-disable-next-line
  console.log('Mongoose Connected');
});
