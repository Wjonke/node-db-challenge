module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './data/projects.db3',
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    // sqlite will not enforce Foreign Keys by default
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = off', done); // turns on the FK enforcement
      },
    },
  },
};