import fs from 'fs';
const services = [];

fs
  .readdirSync(__dirname)
  .filter(file => ((file.indexOf !== ('.')) && (file !== 'index.js')))
  .map(file => {
    const service = require(`./${file}`).default;
    service.forEach(route => services.push(route))
  });

export default services;
