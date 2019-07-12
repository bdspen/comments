const knex = require('../db/knex');
const table = 'comments';

module.exports = {
  create
};

async function create(comment) {
  return knex(table)
    .insert(comment)
    .returning('*');
}
