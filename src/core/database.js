import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/magazine', { useNewUrlParser: true });

const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', () => {
  console.log('Mongoose Connected');
});
