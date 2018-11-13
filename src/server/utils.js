function asyncHandler(fn) {
  return (req, res, next) => {
    const promise = fn(req, res, next);

    promise.catch(next);
  };
}

module.exports = asyncHandler;
