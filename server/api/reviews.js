const reviewsRouter = require('express').Router()
// const {Review, Product, User} = require('../db/models')

// reviewsRouter.get('/', async (req, res, next) => {
//   try {
//     const reviews = await Review.findAll()
//     if (reviews) {
//       res.send(reviews)
//     } else {
//       res.sendStatus(500)
//     }
//   } catch (err) {
//     next(err)
//   }
// })

// reviewsRouter.get('/:reviewId', async (req, res, next) => {
//   try {
//     let reviewId = await Review.findByPk(req.params.reviewId, {
//       include: [User, Product]
//     })
//     res.json(reviewId)
//   } catch (err) {
//     next(err)
//   }
// })

// reviewsRouter.post('/', async (req, res, next) => {
//   try {
//     let review = await Review.create(req.body, {returning: true})
//     res.json(review)
//   } catch (err) {
//     next(err)
//   }
// })

// reviewsRouter.delete('/:reviewId', async (req, res, next) => {
//   try {
//     Review.destroy({
//       where: {
//         id: req.params.reviewId
//       }
//     })
//   } catch (err) {
//     next(err)
//   }
// })

// reviewsRouter.put('/:reviewId', async (req, res, next) => {
//   try {
//     const review = await Review.findByPk(req.params.reviewId)
//     if (!student) {
//       return res.sendStatus(404)
//     } else {
//       let updateReview = review.update(req.body)
//       res.json(updateReview)
//     }
//   } catch (err) {
//     next(err)
//   }
// })

module.exports = reviewsRouter
