import express from "express";
import RestaurantsCtrl from "./restaurants.controller.js";
import ReviewsCtrl from "./reviews.controller.js";

const router = express.Router();

router.route("/").get(RestaurantsCtrl.apiGetRestaurants);
router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .delete(ReviewsCtrl.apiDeleteReview)
  .put(ReviewsCtrl.apiUpdateReview);

export default router;
