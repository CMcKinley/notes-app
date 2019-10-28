class PostMiddleware {
  init(app) {
    app.use(this.configureErrorBoundary);
  }

  configureErrorBoundary(err, _, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({ message, statusCode });
    console.log(err.stack);
    next();
  }
}

module.exports = PostMiddleware;
