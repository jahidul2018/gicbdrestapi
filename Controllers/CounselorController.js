//const { request } = require("express");
const mongoose = require("mongoose");

const tryTocatchFn = require("../middleware/tryTocatchFn");
const ErrorResponse = require("../helper/errorResponse");

const Counselor = require("../Models/Counselor");

// Create and Save a new counselor
exports.create = tryTocatchFn( async (req, res, next) => {
    // // validate request
    const {email, name, title, details, phoneNumber, counselorImage} = req.body;

    if(!email || !name || !title || !details || !phoneNumber || !counselorImage) {
        return next(
            new ErrorResponse(`Please provide requie data`, 400, false)
        );
    }

    // check for existing Counselor

    const counselorCount =  await Counselor.countDocuments(
        {phoneNumber: phoneNumber}
    );

    //check for existing record
    if(counselorCount > 0) {
        return next(
            new ErrorResponse(`Phone number already exists`, 400, false)
        );
    }
    // create a counselor 
    const counselor = await Counselor.create({
        email,name,title,details,phoneNumber,counselorImage
    });
    res.status(200).json({  success: true, data: counselor , message:"Data Save Successfully!" });
});

// Retrieve and return all counselors from the database.
exports.findAll = tryTocatchFn( async (req, res, next) => 
{
    const counselors = await Counselor.find();
    if (!counselors) {
        return next(
            new ErrorResponse(`No counselors found`, 400)
        );
    }
    res.status(200).json({  success: true, data: counselors, message:"Data found"  });

});

// Find a single note with a counselorId
exports.findOne = tryTocatchFn( async (req, res, next) => {
    const counselor = await Counselor.findById(req.params.counselorId);
    if (!counselor) {
        return next(
            new ErrorResponse(`No counselors found with this info`, 400)
        );
    }
    res.status(200).json({  success: true, data: counselor , message: "Counselor found"});
});

// Update a note identified by the counselorId in the request
exports.update = tryTocatchFn( async (req, res, next) => {

    const {email, name, title, details, phoneNumber, counselorImage} = req.body;

    if(!email || !name || !title || !details || !phoneNumber) {
        return next(
            new ErrorResponse(`Please provide data`, 400)
        );
    }
    //  
    const counselor = await Counselor.findByIdAndUpdate(
    req.params.counselorId,
    {
     email, name, title, details, phoneNumber, counselorImage
    },
    { new: true }
  );
  res.status(200).json({success: true, message: "data successfully updated", data: counselor,});
});

// Delete a note with the specified counselorId in the request
exports.delete = tryTocatchFn( async (req, res, next) =>{

    const counselor = await Counselor.findByIdAndDelete(req.params.counselorId);
    if (!counselor) {
        return next(
            new ErrorResponse(`No counselors found with this info`, 400)
        );
    }
    res.status(200).json({  success: true, message:`deleted successfully!`, data: counselor });
});

