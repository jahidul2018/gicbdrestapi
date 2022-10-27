const express= require('express');
const SuccessStoryRouter =express.Router();

const SuccessStory = require('../Controllers/SuccessStoryController');

// Routes
    // GET() ->fetching data
    // Post() -> sending data, 
    // Put() -> updating data, 
    // Delete() -> deleting data
    
    // SiteSettingRouter.get('/', (req, res) => res.send('this is success story route!'))
    // SiteSettingRouter.get('/get-all', (req, res) => res.send('this is client route for all data!'))

    // Create a new story
    SuccessStoryRouter.post('/', SuccessStory.create);

    // Retrieve all story
    SuccessStoryRouter.get('/', SuccessStory.findAll);

    // Retrieve a single storyId with storyId
    SuccessStoryRouter.get('/:storyId', SuccessStory.findOne);

    // Update a Note with storyId
    SuccessStoryRouter.put('/:storyId', SuccessStory.update);

    // Delete a Note with storyId
    SuccessStoryRouter.delete('/:storyId', SuccessStory.delete);

    //router-exports-form-route-namespaces
module.exports = SuccessStoryRouter;