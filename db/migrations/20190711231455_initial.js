exports.up = knex => {
  return knex.schema
    .createTable('users', table => {
      table.increments('id'); // id serial primary key
      table.string('email');
      table.string('name');
      table.timestamps(true, true);
    })
    .then(() =>
      knex.schema.createTable('comments', table => {
        table.increments('id'); // id serial primary key
        table.string('comment');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.timestamps(true, true);
      })
    );
};

exports.down = knex => {
  return knex.schema.dropTable('users').dropTable('comments');
};
