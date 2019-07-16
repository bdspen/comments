const knex = require('../db/knex');
const table = 'comments';

module.exports = {
  create,
  getById,
  getAll,
  remove
};

async function create(comment) {
  return knex(table)
    .insert(comment)
    .returning('*');
}

async function getById(id) {
  return knex('users')
    .join('comments', { 'users.id': 'comments.user_id' })
    .where({ 'comments.id': id });
}

async function getAll() {
  return knex('users').join('comments', { 'users.id': 'comments.user_id' });
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
