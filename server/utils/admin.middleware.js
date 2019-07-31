const checkingIfAdmin = (req, res, next) => {
  if (!req.user && !req.user.isAdmin) {
    const err = new Error()
    err.message = 'Access denied: you *dough* not have access authorization'
    err.status = 401
    next(err)
  } else {
    next()
  }
}

module.exports = checkingIfAdmin
