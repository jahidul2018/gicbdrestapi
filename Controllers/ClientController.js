//const { request } = require("express");
const mongoose = require("mongoose");

const tryTocatchFn = require("../middleware/tryToCatchFn");
const ErrorResponse = require("../helper/errorResponse");

const Client = require("../Models/Client");
const { request } = require("express");

// Create and Save a new Client
exports.create = tryTocatchFn( async (req, res, next) => {
    // // validate request
    console.log(req.body);
    const {name, email, message, subject, phoneNumber} = req.body;

    if(!name || !email || !message) {
        return next(
            new ErrorResponse(`Please provide data! wrong data!`, 400, false)
        );
    }

    // create a client 
        const client = await Client.create({
            name, email, message
        });
    //return 200 response with data
    res.status(200).json({  success: true, data: client });
});

//client step and Save a new Client
exports.step = tryTocatchFn( async (req, res, next) => {
    // // validate request
    console.log(req.body);
    const {name, email, } = req.body;

    if(!name || !email) {
        return next(
            new ErrorResponse(`Please provide data!`, 400, false)
        );
    }

    // send message 
        const client = await Client.create(req.body);
    //return 200 response with data
    res.status(200).json({  success: true, data: client , message: "Thank you for email! "});
});


// send message and Save a new Client
exports.sendMessage = tryTocatchFn( async (req, res, next) => {
    // // validate request
    console.log(req.body);
    const {name, email, message, subject, phoneNumber} = req.body;

    if(!name || !email ) {
        return next(
            new ErrorResponse(`Please provide data!`, 400, false)
        );
    }

    // send message 
        const client = await Client.create(req.body);
    //return 200 response with data
    res.status(200).json({  success: true, data: client , message: "message sent"});
});

// Retrieve and return all client from the database.
exports.findAll = tryTocatchFn( async (req, res, next) => 
{
    const client= await Client.find();
    if (!client) {
        return next(
            new ErrorResponse(`No client found`, 400)
        );
    }
    res.status(200).json({  success: true, message:`data found`, data: client });
});

// Find a single note with a clientId
exports.findOne = tryTocatchFn( async (req, res, next) => {
    const client = await Client.findById(req.params.clientId);
    if (!client) {
        return next(
            new ErrorResponse(`No client found!`, 400)
        );
    }
    res.status(200).json({  success: true, data: client , message: "client found"});
});

// Update a note identified by the clientId in the request
exports.update = tryTocatchFn( async (req, res, next) => {

    // console.log(req.body);
    const {name, email, message} = req.body;

    if(!name || !email || !message) {
        return next(
            new ErrorResponse(`Please provide data`, 400)
        );
    }

    //find by clientId and update   
    const client = await Client.findByIdAndUpdate(req.params.clientId,
    {
     name, email, message
    },
    { new: true }
  );
  res.status(200).json({success: true, mesage: "successfully updated", data: client,});
});

// Delete a note with the specified clientId in the request
exports.delete = tryTocatchFn( async (req, res, next) =>{

    const client = await Client.findByIdAndDelete(req.params.clientId);
    if (!client) {
        return next(
            new ErrorResponse(`No client found!`, 400)
        );
    }
    res.status(200).json({  success: true, message:`deleted successfully!`, data: client });
});

