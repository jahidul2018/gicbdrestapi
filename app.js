
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const db = require("./config/db-config");
const AdminRouter = require("./routes/admin-route");
const clientRouter = require("./routes/client-route");
// app-env-connection
dotenv.config();
// port number
const port = process.env.PORT || 5000;
// database connection
//mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {console.log("databes has been conected")}).catch((err) => {console.log(err)})
db();
app.use(express.json());

app.get("/api/", (req, res) => {
    res.send("welcome to global immigration consultant property sell api");
});
 
app.use("/api/admin", AdminRouter);
app.use("/api/client", clientRouter);

app.listen(port, () => console.log(` App listening on port ${port}!`))
   




   
    
