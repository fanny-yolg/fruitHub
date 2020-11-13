module.exports = (err, req, res, next) => {
  if (err) {
    // nangkap error axios , third party
    if (err.status) {
      res.status(err.status).json({
        success: false,
        message: err.message,
      });
      //modified status
    } else if (err.response && err.response.data) {
      res.status(400).json({
        success: false,
        message: err.response.data.error,
      });
    } else {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
};
