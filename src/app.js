import express from 'express';
import expressCore from './core/express';

const app = express();

expressCore.forEach(item => app.use(item));

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Server listening on localhost:3000');
});
