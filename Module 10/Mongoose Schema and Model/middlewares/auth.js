const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorizatoin;

  if (!token) {
    res.status(401).json({
      message: "Unauthorized error",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      status: "Fail",
      data: error,
    });
  }
};
