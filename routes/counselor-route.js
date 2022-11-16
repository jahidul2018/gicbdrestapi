const express= require('express');
const CounselorRouter =express.Router();

const Counselor = require('../Controllers/CounselorController');

// admin check
const { isAdmin } = require('../middleware/auth');

// Routes
    // GET() ->fetching data
    // Post() -> sending data, 
    // Put() -> updating data, 
    // Delete() -> deleting data
    
    // CounselorRouter.get('/', (req, res) => res.send('this is counselor route!'))
   
    // Create a new counsolor
    CounselorRouter.post('/', isAdmin, Counselor.create);

    // Retrieve all counsolor
    CounselorRouter.get('/', isAdmin, Counselor.findAll);

    // Retrieve a single counsolor with counsolorId
    CounselorRouter.get('/open', Counselor.openfindAll);

    // Retrieve a single counsolor with counsolorId
    CounselorRouter.get('/open/:counselorId', Counselor.openfindOne);

    // Retrieve a single counsolor with counsolorId
    CounselorRouter.get('/:counselorId', isAdmin, Counselor.findOne);
   
    // Update a Note with counsolorId
    CounselorRouter.put('/:counselorId', isAdmin, Counselor.update);

    // Delete a Note with counsolorId
    CounselorRouter.delete('/:counselorId', isAdmin,  Counselor.delete);

    //router-exports-form-route-namespaces
module.exports = CounselorRouter;