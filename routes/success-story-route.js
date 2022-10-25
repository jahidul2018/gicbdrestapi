const express= require('express');
const SiteSettingRouter =express.Router();

// Routes
    // GET() ->fetching data
    // Post() -> sending data, 
    // Put() -> updating data, 
    // Delete() -> deleting data
    
    SiteSettingRouter.get('/', (req, res) => res.send('this is success story route!'))
    SiteSettingRouter.get('/get-all', (req, res) => res.send('this is client route for all data!'))

    //router-exports-form-route-namespaces
module.exports = SiteSettingRouter;