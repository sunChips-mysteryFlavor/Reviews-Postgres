const {reviewMeta} = require('../../sequelize_review_meta/models');

module.exports = {
  queryReviewMeta: (query) => {
    // const count = query.count ? query.count : 30;
    // const page = (query.page ? query.page : 1) - 1;
    return reviewMeta.findAll({
      where: { product_id: query.product_id },
      // limit: count,
      // offset: page*count
    });
  },
}