module.exports =
{
  "development": {
    "username": "eriknewland",
    "password": null,
    "database": "reviews_meta",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "define": {
      "underscored": true
    }
  },
  "test": {
    "username": "eriknewland",
    "password": null,
    "database": "reviews_meta",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.POSTGRES_USERNAME_PROD,
    "password": process.env.POSTGRES_PASSWORD_PROD,
    "database": "reviews_meta",
    "host": process.env.POSTGRES_DB_HOST_PROD,
    "port": 5432,
    "dialect": "postgres",
    "define": {
      "underscored": true
    }
  }
}
