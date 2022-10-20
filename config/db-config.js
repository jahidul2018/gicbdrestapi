const mongoose = require("mongoose")
const dotenv = require('dotenv')
// app-env-connection
dotenv.config();

const DB_CONNECT =process.env.DB_CONNECT;

const db = async () => {
    try {
        
        await mongoose.connect(
            DB_CONNECT,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => {
                console.log("databes has been conected");
            }
        );
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = db 