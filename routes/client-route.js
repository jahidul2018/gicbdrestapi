const express= require('express');
const ClientRoute =express.Router();

const Client = require('../Controllers/ClientController');

// Routes
    // GET() ->fetching data
    // Post() -> sending data, 
    // Put() -> updating data, 
    // Delete() -> deleting data
    
    // ClientRoute.get('/', (req, res) => res.send('this is client route!'))
    // ClientRoute.get('/get-all', (req, res) => res.send('this is client route for all data!'))

    // Create a new client
    ClientRoute.post('/', Client.create);
    ClientRoute.post('/step', Client.step);

    //send message
    ClientRoute.post('/send-message', Client.sendMessage);

    // Retrieve all client
    ClientRoute.get('/', Client.findAll);

    // Retrieve a single clientId with clientId
    ClientRoute.get('/:clientId', Client.findOne);

    // // Update a Note with clientId
    // ClientRoute.put('/:clientId', Client.update);

    // // Delete a Note with clientId
    // ClientRoute.delete('/:clientId', Client.delete);

    //router-exports-form-route-namespaces
module.exports = ClientRoute;