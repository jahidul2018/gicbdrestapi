const mongoose = require("mongoose");
const CounselorSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please add a Email"],
            // unique : [true,"email address allready exit"],
            // trim: true,
            // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Plese add a valid Email address"],
        },
        // password: {
        //     type: String,
        //     required: [true, "Please add a valid password"],
        //     // select: false,
        // },
        name: {
            type: String,
            required: [true, "Please add you name"],
        },
        title: {
            type: String,
            required: [true, "Please add you name"],
        },
        details: {
            type: String,
            required: [true, "Please add you name"],
        },
        phoneNumber: {
            type: String,
            required: [true, "Please add you phone number"],
            unique:[true,"phone number already exit"],
        },
        counselorImage: {
            type: String,
            //required: [true, "Please add you counselor image"],
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
        role: {
            type: String,
            default:"counselor",
        },
        // date:{
        //     type:String, 
        //     default:Date.now 
        // },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Counselor", CounselorSchema);