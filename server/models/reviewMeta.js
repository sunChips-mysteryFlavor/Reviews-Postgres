const {reviews_meta} = require('../../sequelize_review_meta/models');

module.exports = {
  queryReviewMeta: (query) => {
    // const count = query.count ? query.count : 30;
    // const page = (query.page ? query.page : 1) - 1;
    return reviews_meta.findByPk(
      query.product_id
      // query.product_id, {subQuery: false}
      // limit: count,
      // offset: page*count
    );
  },
}