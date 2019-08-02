const reviewRouter = require('express').Router()
const {Review, Product, User} = require('../db/models')
//TODO: dont forget to add productId in the path

const mustBeAdmin = (req, res, next) => {
  if (!req.user && !req.user.isAdmin) {
    return next('You are not allowed to do that')
  }
  next()
}

const mustBeLoggedIn = (req, res, next) => {
  if (!req.user) {
    return next('You must be logged in')
  }
  next()
}
//
reviewRouter.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({include: [Product]})
    if (reviews) {
      res.json(reviews)
    } else {
      res.sendStatus(500)
    }
  } catch (err) {
    next(err)
  }
})

reviewRouter.get('/:reviewId', async (req, res, next) => {
  try {
    let reviewId = await Review.findByPk(req.params.reviewId, {
      include: [User, Product]
    })
    res.json(reviewId)
  } catch (err) {
    next(err)
  }
})

reviewRouter.post('/', async (req, res, next) => {
  try {
    let review = await Review.create(req.body, {returning: true})
    res.json(review)
  } catch (err) {
    next(err)
  }
})

reviewRouter.delete('/:reviewId', mustBeAdmin, (req, res, next) => {
  try {
    Review.destroy({
      where: {
        id: req.params.reviewId
      }
    })
  } catch (err) {
    next(err)
  }
})

reviewRouter.put('/:reviewId', mustBeLoggedIn, async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.reviewId)
    if (!review) {
      return res.sendStatus(404)
    } else {
      let updateReview = review.update(req.body)
      res.json(updateReview)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = reviewRouter
