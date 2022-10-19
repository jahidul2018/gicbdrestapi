// app-express-connection
    const express = require('express')
    const app = express()
// port 3000
    const port = process.env.PORT || 3000;
// DB-connection 
    const db = require("./config/db-config");
// app-env-connection
    const dotenv = require('dotenv')
    dotenv.config();
// middleware 
    const AdminRouter = require("./routes/admin-route");
    // const CommonRouter = require("./routes/common-route");
    // const clientRouter = require("./routes/client-route");
    // const frontendRouter = require("./routes/frontend-route");

app.get("/api/", (req, res) => {
    res.send("welcome to global immigration consultant property sell api");
});

// // app-use middleware function with prefix route path    
    app.use("/api/admin", AdminRouter);
    // app.use("/api/common", CommonRouter);
    // app.use("/api/client", clientRouter);
    // app.use("/api/app", frontendRouter);
// app-main-db
   // mongoose.connect(process.env.DB_CONNECT);
       db();
// app-listen-connection
    app.listen(port, () => console.log(` App listening on port ${port}!`))
   




   
    
