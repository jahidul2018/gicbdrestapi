const tryTocatchFn = require("../middleware/tryToCatchFn");
const ErrorResponse = require("../helper/errorResponse");
const AdminModel = require("../Models/Admin");
const jwt = require("jsonwebtoken");

exports.isAdmin = tryTocatchFn(async (req, res, next) => {
  //get the token
  const token = adminTokenExists(req, next);

    if (!token) {
        return next(new ErrorResponse("Not authorized to access this route", 401));
    }

    //verify the token
    const decoded = jwt.verify(token, process.env.ADMIN_PASSWORD_SECRET);
    const admin = await AdminModel.findById(decoded.id);

        if (!admin) {
            return next(
                new ErrorResponse("Not authorized to access this route", 401)
            );
        }

        // set admin infos and step forward to next step
        req.admin = admin;
    next();
});

const adminTokenExists = (req, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  return token;
};