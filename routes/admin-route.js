
const express = require('express');
const AdminRoute = express.Router();
// call Admin model
// const Admin = require('../Models/Admin');
const Admin = require('../Controllers/AdminController');
const { isAdmin } = require('../middleware/auth');

// Routes
    // GET() ->fetching data
    // Post() -> sending data, 
    // Put() -> updating data, 
    // Delete() -> deleting data
    
    AdminRoute.get('/test',  (req, res) => res.send('this is admin test route!'));
    // AdminRoute.post('/signin', (req, res) => {  console.log(req.body)   });

    //signin Admin route
    AdminRoute.post('/signin', Admin.signin);

    // Create a new Admin
    AdminRoute.post('/register', Admin.register);

    //update admin info
    AdminRoute.put('/update', isAdmin, Admin.update);

    //admin update password 
    AdminRoute.put('/update-password', isAdmin, Admin.updatePassword);
    // Retrieve Admin
    AdminRoute.get('/me', isAdmin, Admin.me);

//router-exports-form-route-namespaces
    module.exports = AdminRoute;

    