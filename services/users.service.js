const knex = require('../db/knex');
const table = 'comments';

module.exports = {
  getById
};

function getById(id) {
  return knex(table).where({ id });
}
