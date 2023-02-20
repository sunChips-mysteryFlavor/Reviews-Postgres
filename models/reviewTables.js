const reviewsTableQuery = `CREATE TABLE IF NOT EXISTS reviews (
  product_id integer PRIMARY KEY,
  review_id integer,
  rating integer,
  summary text,
  recommend boolean,
  response text,
  body text,
  date date,
  reviewer_name text,
  helpfulness integer,
)`;

const reviewsPhotoTableQuery = `CREATE TABLE IF NOT EXISTS reviews_photo (
  photo_id int PRIMARY KEY,
  review_id integer,
  url text
)`;

const reviewsMetaTableQuery = `CREATE TABLE IF NOT EXISTS reviews_meta (
  product_id integer PRIMARY KEY,
  ratings_count_1 integer,
  ratings_count_2 integer,
  ratings_count_3 integer,
  ratings_count_4 integer,
  ratings_count_5 integer,
  recommended_true integer,
  recommended_false integer,
)`;

const reviewsCharsTableQuery = `CREATE TABLE IF NOT EXISTS characteristics (
  characteristics_id integer PRIMARY KEY,
  product_id text,
  title_id integer,
  value integer
)`;

const reviewsCharTitleTableQuery = `CREATE TABLE IF NOT EXISTS characteristics_title (
  title_id integer PRIMARY KEY,
  title text
)`;

const allQueries = [
  reviewsTableQuery,
  reviewsPhotoTableQuery,
  reviewsMetaTableQuery,
  reviewsCharsTableQuery,
  reviewsCharTitleTableQuery,
];

module.exports = allQueries