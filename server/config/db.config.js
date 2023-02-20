module.exports = {
  {
    "development": {
      "username": "eriknewland",
      "password": null,
      "database": "reviews",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "production": {
      "url": "process.env.DATABASE_URL",
      "dialect": "mysql"
    }
  }

};