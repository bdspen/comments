module.exports = {
  local: {
    client: 'pg',
    migrations: {
      directory: './migrations'
    },
    connection: {
      host: '127.0.0.1',
      database: 'comments-db'
    },
    debug: true,
    ssl: true
  },

  development: {
    client: 'pg',
    migrations: {
      directory: './migrations'
    },
    connection: process.env.DATABASE_URL,
    debug: true
  }
};
