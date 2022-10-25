const mongoose = require("mongoose");

const SuccessStorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add you name"],
        },
         StroyUrl: {
            type: String,
            required: [true, "Please add you Stroy Url"],
        },
         StoryImage: {
            type: String,
            required: [true, "Please add you Story Image"],
        },
        date:{
            type:String, 
            default:Date.now 
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("SuccessStory", SuccessStorySchema);