
const express = require('express');
const AdminRoute = express.Router();
// call Admin model
const Admin = require('../Model/Admin');

// Routes
    // GET() ->fetching data
    // Post() -> sending data, 
    // Put() -> updating data, 
    // Delete() -> deleting data
    
    AdminRoute.get('/', (req, res) => res.send('this is admin route!'))
    AdminRoute.get('/counselor', (req, res) => res.send('this is admin counselor api!'))
    AdminRoute.post('/signup', (req, res) => {  console.log(req.body)   });

//router-exports-form-route-namespaces
    module.exports = AdminRoute;