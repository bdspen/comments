const knex = require('../db/knex');
const table = 'comments';

module.exports = {
  create
};

function create(comment) {
  return knex
    .insert(comment)
    .returning('*')
    .into(table);
}
