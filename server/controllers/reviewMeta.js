const {reviewMeta} = require('../models');

module.exports = {
  get: (req, res) => {
    reviewMeta.queryReviewMeta(req.query)
      .then((result) => {
        res.status(200).send(result);
      }).catch((error) => {
        res.status(404).send(error);
      })
  },
};

// Need to consider a POST method to update ratings/recommended status per product_id. Discuss w/ mark and Sam