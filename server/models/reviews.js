const {reviews} = require('../../sequelize/models');

module.exports = {
  queryReviews: (query) => {
    const count = query.count ? query.count : 30;
    const page = (query.page ? query.page : 1) - 1;

    return reviews.findAll({
      where: { product_id: query.product_id },
      limit: count,
      offset: page*count
    });
  },
  insertReview: (data) => {
    return reviews.create({
      review_id:data.review_id,
      product_id:data.product_id,
      rating:data.rating,
      summary:data.summary,
      response:data.response,
      body:data.body,
      date:data.date,
      reviewer_name:data.name, // possible error here
      helpfulness:data.helpfulness,
    })
  },
  incrementReviewHelfulness: (review_id) => {
    return reviews.increment('helpfulness',{
      by: 1,
      where: {review_id:review_id}
    })
  },
  toggleReported: (review_id) => {
    return answers.update({reported: true},{
      where:{review_id:review_id}
    })
  },
}