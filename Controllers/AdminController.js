const mongoose = require("mongoose");
const tryTocatchFn = require("../middleware/tryTocatchFn");
const ErrorResponse = require("../helper/errorResponse");
const AdminModel = require("../models/Admin");


exports.register = tryTocatchFn(async (req, res, next) => {
  const { name, email, password, phone } = req.body;

  //check fields
  if (!name || !email || !password || !phone) {
    return next(new ErrorResponse("Field should not be empty", 400));
  }

  //check for email and phone
  const adminCount = await AdminModel.countDocuments({
    $or: [{ email: email }, { phone: phone }],
  });

  if (adminCount) {
    return next(
      new ErrorResponse(
        "Admin aready exists with the same email or  phone,or both"
      )
    );
  }

  //create admin
  const admin = await AdminModel.create({
    name,
    email,
    phone,
    password,
  });

  res.status(200).json({
    success: true,
    status: 200,
    message: "admin successfully created",
  });
});


exports.signin = tryTocatchFn(async (req, res, next) => {
  // get the parameters
  const { email, password } = req.body;

  //check fields
  if (!email || !password) {
    return next(
      new ErrorResponse("email and password  should not be empty", 400)
    );
  }

  //get admin with email
//   const admin = await AdminModel.findOne({ email }).select("+password");
  const admin = await AdminModel.findOne({ email });

  if (!admin) {
    return next(new ErrorResponse("User does not exits with this info", 400));
  }

  // verify password
  const verifyPassword = await admin.verifyPassword(password);

  if (!verifyPassword) {
    return next(new ErrorResponse("Invalid credentials", 400));
  }

  //generate token
  const token = await admin.generateToken();

  //reponse with success message
  res.status(200).json({
    status: true,
    message: "admin successfully",
    token: token,
    data: admin,
  });
});



exports.me = tryTocatchFn(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "profile info",
    data: req.admin,
  });
});

exports.update = tryTocatchFn(async (req, res, next) => {
  const { name, email, phone } = req.body;
  //check fields
  if (!name || !email || !phone) {
    return next(new ErrorResponse("Field should not be empty", 400));
  }

  const adminExists = await AdminModel.aggregate([
    {
      $match: {
        $and: [
          {
            _id: { $ne: mongoose.Types.ObjectId(req.admin._id) },
          },

          {
            $or: [
              {
                email,
              },
              {
                phone,
              },
            ],
          },
        ],
      },
    },
  ]);

  if (adminExists.length) {
    return next(
      new ErrorResponse("Admin Alrady exists with the phone and email")
    );
  }

  //update

  const admin = await AdminModel.findByIdAndUpdate(
    req.admin._id,
    {
      name,
      email,
      phone,
    },
    { new: true }
  );

  res.json({
    success: true,
    mesage: "successfully updated",
    data: admin,
  });
});


exports.updatePassword = tryTocatchFn(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;

  //check fields
  if (!oldPassword || !newPassword) {
    return next(
      new ErrorResponse("old and new password  should not be empty", 400)
    );
  }

  //get the agent
  const admin = await AdminModel.findById(req.admin._id).select("+password");

  if (!admin) {
    return next(new ErrorResponse("User does not exits with this info", 404));
  }

  //verify password
  const verifyPassword = await admin.verifyPassword(oldPassword);

  if (!verifyPassword) {
    return next(new ErrorResponse("Previous password does not match", 400));
  }

  //now change the password
  admin.password = newPassword;
  await admin.save();

  res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
});





















