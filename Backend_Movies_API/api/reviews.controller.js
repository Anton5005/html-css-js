import ReviewsDAO from "../dao/reviews/DAO.js"

export default class ReviewsController {
    static async apiPostReview(reg, res, next) {
        try {
            const movieId = req.body.movieId
            const review = req.body.review
            const user = req.body.user

            const reviewsResponse = await ReviewsDAO.addReview(
                movieId,
                user,
                review
            )
            res.json({status: 'success'})
        } catch (e) {
            res.status(500).json({error: e.message })
        }
    }

    static async apiGetReviews(reg, res, next) {
        try {
            let id = req.params.id || {}
            let review = await reviewsDAO.getReview(id)
            if (!review) {
                res.status(404).json({error: "Not found"})
                return
        }
        res.json(review)
        } catch (e) {
            console.log(`api, ${e}`)
            res.status(500).json({error: e})
        }
    }

    static async apiUpdateReview(reg, res, next) {
        try{
            const reviewId = req.param.id
            const review = req.body.review
            const user = req.body.user

            const reviewResponse = await reviewsDAO.updateReview(
                reviewID,
                user,
                review
            )
        }
    }




}




























