//const { request } = require("express");
const mongoose = require("mongoose");
const tryTocatchFn = require("../middleware/tryToCatchFn");
const ErrorResponse = require("../helper/errorResponse");

const SuccessStory = require("../Models/SuccessStory");

// Create and Save a new counselor
exports.create = tryTocatchFn( async (req, res, next) => {
    // // validate request
    console.log(req.body);
    const {name, storyUrl, storyImage} = req.body;

    if(!name || !storyUrl || !storyImage) {
        return next(
            new ErrorResponse(`Please provide data! wrong data!`, 400, false)
        );
    }

    // create a SuccessStory 
        const successStory = await SuccessStory.create({
            name, storyUrl, storyImage
        });
    //return 200 response with data
    res.status(200).json({  success: true, data: successStory, message: "success story created" });
});

// Retrieve and return all SuccessStory from the database.
exports.findAll = tryTocatchFn( async (req, res, next) => 
{
    const successStories= await SuccessStory.find();
    if (!successStories) {
        return next(
            new ErrorResponse(`No successStories found`, 400)
        );
    }
    res.status(200).json({  success: true, message:`data found`, data: successStories });

});

// Find a single note with a storyId
exports.findOne = tryTocatchFn( async (req, res, next) => {
    const successStory = await SuccessStory.findById(req.params.storyId);
    if (!successStory) {
        return next(
            new ErrorResponse(`No successStory found with this info`, 400)
        );
    }
    res.status(200).json({  success: true, data: successStory , message: "successStory found"});
});

// Update a note identified by the storyId in the request
exports.update = tryTocatchFn( async (req, res, next) => {

    // console.log(req.body);
    const {name, storyUrl, storyImage} = req.body;

    if(!name || !storyUrl) {
        return next(
            new ErrorResponse(`Please provide data`, 400)
        );
    }

    //find by storyId and update   
    const successStory = await SuccessStory.findByIdAndUpdate(req.params.storyId,
    {
     name, storyUrl, storyImage
    },
    { new: true }
  );
  res.status(200).json({success: true, message: "successfully updated", data: successStory,});
});

// Delete a note with the specified storyId in the request
exports.delete = tryTocatchFn( async (req, res, next) =>{

    const successStory = await SuccessStory.findByIdAndDelete(req.params.storyId);
    if (!successStory) {
        return next(
            new ErrorResponse(`No SuccessStory found with this info`, 400)
        );
    }
    res.status(200).json({  success: true, message:`deleted successfully!`, data: successStory });
});

