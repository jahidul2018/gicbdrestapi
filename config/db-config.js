const mongoose = require("mongoose")

const DB_CONNECT =process.env.DB_CONNECT;

const db = async () => {
    try {
        console.log("DB_CONNECT", DB_CONNECT);
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