import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('<h1 style="text-align: center">MAGAZINE</h1>')
})

app.listen(3000, () => {
  console.log('Server listening on localhost:3000');
});
