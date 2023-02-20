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
    // console.log(req)
    reviews.insertReview(req.query)
      .then(() => {
        res.status(201).send();
      }).catch((error) => {
        res.status(404).send(error);
      })
  },

  put: (req, res) => {
    // console.log(req)
   reviews.incrementReviewHelfulness(req.params.review_id)
      .then(() => {
        res.status(204).send();
      }).catch((error) => {
        res.status(404).send(error);
      })
  },

  remove: (req, res) => {
    reviews.toggleReported(req.params.review_id)
      .then(() => {
        res.status(204).send();
      }).catch((error) => {
        res.status(404).send(error);
      })
  },
};