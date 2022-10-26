
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const errorHandler = require('./middleware/errors');
const db = require("./config/db-config");

//routee middleware 
const AdminRouter = require("./routes/admin-route");
const ClientRouter = require("./routes/client-route");
const SiteSettingRouter = require("./routes/site-setting-route");
const CounselorRouter = require("./routes/counselor-route");
const SuccessStoryRouter = require("./routes/success-story-route");


const dbconnection = require('./config/db-config');

// app-env-connection
dotenv.config();


// port number
const port = process.env.PORT || 5000;
// database connection
//mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {console.log("databes has been conected")}).catch((err) => {console.log(err)})
dbconnection();
app.use(express.json());

app.get("/api/", (req, res) => {
    res.send("welcome to global immigration consultant property sell api");
});
 
// router default routes
app.use("/api/admins", AdminRouter);
app.use("/api/clients", ClientRouter);
app.use("/api/site-settings", SiteSettingRouter);
app.use("/api/counselors", CounselorRouter);
app.use("/api/success-stories", SuccessStoryRouter);

// custom error handlers for try catch function
app.use(errorHandler);

//app listning port
app.listen(port, () => console.log(` App listening on port ${port}!`))
   




   
    
