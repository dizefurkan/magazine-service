import bodyParser from 'body-parser';

import './database';
import routers from './routers';

export default [
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  routers,
];
