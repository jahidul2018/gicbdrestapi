const mongoose = require("mongoose");

const Counselor = require("../Models/Counselor");

// Create and Save a new counselor
exports.create = (req, res) => {

     // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Note name can not be empty"
        });
    }

    // Create a Note
    const Counselor = new Note({
        name: req.body.name || "Untitled Name", 
        title: req.body.title,
        email: req.body.email,
        details: req.body.details,
        phoneNumber: req.body.phoneNumber,
        CounselorImage: req.body.CounselorImage,

    });

    // Save Note in the database
    Counselor.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });


};

// Retrieve and return all counselors from the database.
exports.findAll = (req, res) => {
   //res.send('this is counselor route with controller file!')

    Counselor.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a counselorId
exports.findOne = (req, res) => {

};

// Update a note identified by the counselorId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified counselorId in the request
exports.delete = (req, res) => {

};

