import express from "express";
import RviewsCtrl from "/reviews.controller.js";

const router = express.Router();

// router.route('/').get((reg, res) => res.send("Hello world"))

router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews)
router.route("/new").post(ReviewsCtrl.apiPostReview)
router.route("/:id")
        .get(RviewsCtrl.apiGetReviews)
        .put(RviewsCtrl.apiUpdateReview)
        .delete(RviewsCtrl.apiDeleteReview)


export default router






