const ErrorResponse = require("../helper/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;
    error.success = err.success;

    //mongoose bad ObjectId with error code 404
    if (err.name === "CastError") {
        const message = `Resource not found with id `;
        error = new ErrorResponse(message, 404);
    }

    if (err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new ErrorResponse(message, 400);
    }

    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new ErrorResponse(message, 422);
    }

    console.log(err.name, error.message);
    // default error handler 
    res.status(error.statusCode || 500).json({ 
        success: error.success || false,
        status: error.statusCode || 500,
        error: error.message || "Server Error",

    });
}; 

module.exports = errorHandler;