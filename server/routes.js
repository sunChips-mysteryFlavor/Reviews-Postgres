const ctrl = require('./controllers');
const router = require('express').Router();

//get all reviews
router.get('/reviews', ctrl.reviews.get);

//post a new review
router.post('/reviews', ctrl.reviews.post);

//update the helpful or reported status of a review
router.put('/reviews/:review_id/helpful', ctrl.reviews.put);
router.put('/reviews/:review_id/report', ctrl.reviews.remove);

//get review meta data
router.get('/reviews/meta', ctrl.reviewMeta.get);


module.exports = router;