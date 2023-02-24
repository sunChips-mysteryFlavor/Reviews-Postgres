const ctrl = require('./controllers');
const router = require('express').Router();

//get all reviews
router.get('/', ctrl.reviews.get); // WORKING

//post a new review
router.post('/', ctrl.reviews.post); // WORKING

//update the helpful or reported status of a review
router.put('/:review_id/helpful', ctrl.reviews.put); // WORKING
router.put('/:review_id/report', ctrl.reviews.remove);

//get review meta data
router.get('/meta', ctrl.reviewMeta.get); // WORKING


module.exports = router;