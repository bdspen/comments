const knex = require('../db/knex');
const table = 'comments';

module.exports = {
  create,
  getAll,
  remove
};

async function create(comment) {
  return knex(table)
    .insert(comment)
    .returning('*');
}

async function getAll() {
  return knex(table);
}

async function remove(id) {
  const result = await knex(table)
    .where({ id })
    .first();
  const removedRows = await knex(table)
    .del()
    .where({ id });
  return result;
}
