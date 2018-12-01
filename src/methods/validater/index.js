import validate from 'validate.js';
import constraints from './constraints';

export default data => validate(data, constraints);
