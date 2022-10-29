const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

//adminSchema password pre save
adminSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Verify password
adminSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// get token
adminSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, process.env.ADMIN_PASSWORD_SECRET, {
    expiresIn: "3d",
  });
};



module.exports = mongoose.model("Admin", AdminSchema);