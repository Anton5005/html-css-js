import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
// import { ObjectId } from "mongodb";

let reviews

export default class ReviewsDAO {
    static async injectDB(conn) {
        if (reviews) {
            return
        }
        try {
            reviews = await conn.db("reviews").collection("reviews")
        } catch (e) {
            console.error(`Unable to establish collection handles in userDAO: ${e}`)
        }
    }

    // $ curl -X POST http://localhost:8000/api/v1/reviews/new -H "Content-Type: application/json" -d '{"movieId": 15, "user": "Arnold", "review": "ideal"}'
    static async addReview(movieId, user, review) {
        try {
            const reviewDoc = {
                movieId: movieId,
                user: user,
                review: review,
            }

            return await reviews.insertOne(reviewDoc)
        } catch (e) {
            console.error(`Unable to post review: ${e}`)
            return {error: e}
        }
    }

    // $ curl -X GET http://localhost:8000/api/v1/reviews/676ded46f0760b0e2cf84453
    static async getReview(reviewId) {
        try {
            return await reviews.findOne({_id: new ObjectId(reviewId)})
        } catch (e) {
            console.error(`Unable to get review: ${e}`)
            return {error: e}
        }
    }

    // $ curl -X PUT http://localhost:8000/api/v1/reviews/676ded46f0760b0e2cf84453 -H "Content-Type: application/json" -d '{"user": "beau", "review": "horriblessss"}'
    static async updateReview(reviewId, user, review) {
        try {
            const updateResponse = await reviews.updateOne(
                {_id: new ObjectId(reviewId)},
                {$set: {user: user, review: review}}
            )
            console.log("KU")
            console.log("MongoDB Response:", updateResponse);
            return updateResponse
        } catch (e) {
            console.error(`Unable to update review: ${e}`)
            return {error: e}
        }
    }

    static async deleteReview(reviewId) {
        try {
            const deleteResponse = await reviews.deleteOne({
                _id: new ObjectId(reviewId),
            })

            return deleteResponse
        } catch (e) {
            console.error(`Unable to delete review: ${e}`)
            return {error: e}
        }
    }

    // $ curl -X GET http://localhost:8000/api/v1/reviews/movie/12
    static async getReviewsByMovieId(movieId) {
        try {
            const cursor = await reviews.find({
                movieId: parseInt(movieId)
            })
            return cursor.toArray()
        } catch (e) {
            console.error(`Unable to get review: ${e}`)
            return {error: e}
        }
    }



}


















