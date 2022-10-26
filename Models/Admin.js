const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please add a Email"],
            unique : [true,"email address allready exit"],
            trim: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Plese add a valid Email address"],
        },
        password: {
            type: String,
            required: [true, "Please add a valid password"],
            // select: false,
        },
        name: {
            type: String,
            required: [true, "Please add you name"],
        },
        phoneNumber: {
            type: String,
            required: [true, "Please add you phone number"],
            unique:[true,"phone number already exit"],
        },
        role: {
            type: String,
            default:"admin",
        },
        // date:{
        //     type:String, 
        //     default:Date.now 
        // },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);