const mongoose = require("mongoose");

const SiteSettingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add you name"],
        },
        description: {
            type: String,
            required: [true, "Please add you name"],
        },
         SiteUrl: {
            type: String,
            required: [true, "Please add you Stroy Url"],
        },
         SiteLogo: {
            type: String,
            required: [true, "Please add you Story Image"],
        },
         facebookLink: {
            type: String,
            //required: [true, "Please add you facebook link"],
        },
        twitterLink: {
            type: String,
        },
        linkedinLink: {
            type: String,
        },
        whatsappLink: {
            type: String,
        },
        instagramLink: {
            type: String,
        },
        youtube:{
            type: String,
        },
        date:{
            type:String, 
            default:Date.now 
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("SuccessStory", SiteSettingSchema);