const knex = require('../db/knex');
const table = 'users';

module.exports = {
  getById,
  getByEmail,
  create
};

function getById(id) {
  return knex(table).where({ id });
}

function getByEmail(email) {
  return knex(table)
    .where({ email })
    .first();
}

async function create(user) {
  return knex(table)
    .insert(user)
    .returning('*');
}
