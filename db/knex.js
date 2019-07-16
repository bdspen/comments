const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knexStringcase = require('knex-stringcase');

module.exports = require('knex')(knexStringcase(config));
