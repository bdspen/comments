module.exports = {
  local: {
    client: 'pg',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/local'
    },
    connection: {
      host: '127.0.0.1',
      database: 'comments-db'
    },
    debug: true,
    ssl: true
  },

  test: {
    client: 'pg',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    connection: {
      host: '127.0.0.1',
      database: 'test-comments-db'
    },
    debug: true,
    ssl: true
  },

  development: {
    client: 'pg',
    migrations: {
      directory: './db/migrations'
    },
    connection: process.env.DATABASE_URL,
    debug: true
  }
};
