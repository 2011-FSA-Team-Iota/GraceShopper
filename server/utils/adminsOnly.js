module.exports = (req, res, next) => {
  //check if user is logged in and if the user is an admin
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    //error constructor
    const err = new Error('Unauthorized!!')
    //err is an object. 401 means not authorized
    err.status = 401
    next(err)
  }
}
