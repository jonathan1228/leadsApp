module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/leadsDB'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
