module.exports = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(e => {
    e.httpStatusCode = 400;
    return next(e);
  });
};
