const {reviews} = require('../models');

module.exports = {
  get: (req, res) => {
    reviews.queryReviews(req.query)
      .then((result) => {
        res.status(200).send(result);
      }).catch((error) => {
        res.status(404).send(error);
      })
  },

  post: (req, res) => {
    reviews.insertReview(req.body)
      .then(() => {
        res.status(201).send();
      }).catch((error) => {
        res.status(404).send(error);
      })
  },

  put: (req, res) => {
    reviews.incrementReviewHelfulness(req.params.answer_id)
      .then(() => {
        res.status(204).send();
      }).catch((error) => {
        res.status(404).send(error);
      })
  },

  remove: (req, res) => {
    reviews.toggleReported(req.params.answer_id)
      .then(() => {
        res.status(204).send();
      }).catch((error) => {
        res.status(404).send(error);
      })
  },
};