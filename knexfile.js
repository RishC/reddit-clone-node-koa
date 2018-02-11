const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'db');

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://rish:rish94@localhost:5432/koa-api',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};
