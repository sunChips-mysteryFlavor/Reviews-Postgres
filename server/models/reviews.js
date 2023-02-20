const {reviews, reviews_photo} = require('../../sequelize/models');
const Sequelize = require('sequelize');

module.exports = {
  queryReviews: (query) => {
    const count = query.count ? query.count : 30;
    const page = (query.page ? query.page : 1) - 1;

    return reviews.findAll({
      where: { product_id: query.product_id },
      include: reviews_photo
      // include: [{
      //   model: reviews_photo,
      //   as: 'reviews_photo',
      //   where: {review_id: Sequelize.col('reviews_photos.review_id')},
      //   attributes: ['photo_id', 'url'],
      //   required: false
      // }],
    });
  },
  insertReview: (data) => {
    return reviews.create({
      product_id: data.product_id,
      rating: data.rating,
      summary: data.summary,
      recommend: data.recommend,
      response: data.response,
      body: data.body,
      date: data.date,
      reviewer_name: data.name, // possible error here
      helpfulness: data.helpfulness,
      // photo: data.photo,
    })
  },
  incrementReviewHelfulness: (review_id) => {
    return reviews.increment('helpfulness',{
      by: 1,
      where: {review_id:review_id}
    })
  },
  toggleReported: (review_id) => {
    return reviews.destroy({
      where:{review_id:review_id}
    })
  },
}