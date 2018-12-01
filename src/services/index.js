import fs from 'fs';

const services = [];

fs
  .readdirSync(__dirname)
  .filter(file => ((file.indexOf !== ('.')) && (file !== 'index.js')))
  .forEach((file) => {
    // eslint-disable-next-line
    const service = require(`./${file}`).default;
    service.forEach(route => services.push(route));
  });

export default services;
