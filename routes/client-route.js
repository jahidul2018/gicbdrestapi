const express= require('express');
const router =express.Router();

// Routes
    // GET() ->fetching data
    // Post() -> sending data, 
    // Put() -> updating data, 
    // Delete() -> deleting data
    
    router.get('/', (req, res) => res.send('this is client route!'))



    //router-exports-form-route-namespaces
module.exports = router;