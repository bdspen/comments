const knex = require('../db/knex');
const table = 'users';

module.exports = {
  getById,
  create
};

function getById(id) {
  return knex(table).where({ id });
}

async function create(user) {
  return knex(table)
    .insert(user)
    .returning('*');
}
