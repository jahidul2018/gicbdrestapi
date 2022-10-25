const express= require('express');
const ClientRoute =express.Router();

// Routes
    // GET() ->fetching data
    // Post() -> sending data, 
    // Put() -> updating data, 
    // Delete() -> deleting data
    
    ClientRoute.get('/', (req, res) => res.send('this is client route!'))
    ClientRoute.get('/get-all', (req, res) => res.send('this is client route for all data!'))



    //router-exports-form-route-namespaces
module.exports = ClientRoute;