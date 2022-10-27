const express= require('express');
const CounselorRouter =express.Router();

const Counselor = require('../Controllers/CounselorController');

// Routes
    // GET() ->fetching data
    // Post() -> sending data, 
    // Put() -> updating data, 
    // Delete() -> deleting data
    
    // CounselorRouter.get('/', (req, res) => res.send('this is counselor route!'))
   
    // Create a new counsolor
    CounselorRouter.post('/', Counselor.create);

    // Retrieve all counsolor
    CounselorRouter.get('/', Counselor.findAll);

    // Retrieve a single counsolor with counsolorId
    CounselorRouter.get('/:counselorId', Counselor.findOne);

    // Update a Note with counsolorId
    CounselorRouter.put('/:counselorId', Counselor.update);

    // Delete a Note with counsolorId
    CounselorRouter.delete('/:counselorId', Counselor.delete);

    //router-exports-form-route-namespaces
module.exports = CounselorRouter;