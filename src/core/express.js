import express from 'express';
import bodyParser from 'body-parser';

import './database';
import routers from './routers';

export default [
  bodyParser.json(),
  routers
];
