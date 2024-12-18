import express from "express";

const router = express.Router();

router.route('/').get((reg, res) => res.send("Hello world"))

export default router






