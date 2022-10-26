const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
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
         subject: {
            type: String,
            // required: [true, "Please add you subject"],
        },
         message: {
            type: String,
            // required: [true, "Please add you meassage"],
        },
        // clienttype: {
        //     type: String,
        //     required: [true, "Please add you client type"],
        //     enum: ['subscription', 'non-subscription'],'], 
        // }
        // phoneNumber: {
        //     type: String,
        //     required: [true, "Please add you phone number"],
        //     unique:[true,"phone number already exit"],
        // },
        role: {
            type: String,
            default:"client",
        },
        // date:{
        //     type:String, 
        //     default:Date.now 
        // },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);