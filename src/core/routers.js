import express from 'express';
import services from '../services/';

const app = express();

services.forEach(service => {
  app[service.method](service.path, service.handler);
});

export default app;
