/* Importing Different Modules */

const {globalVariables} = require('./config/configuration');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
//const multer  = require('multer')
const bodyParser=require("body-parser");
const hbs = require('express-handlebars');
const {mongoDbUrl, PORT} = require('./config/configuration');
const flash = require('connect-flash');
const session = require('express-session');


const app = express();


// Configure Mongoose to Connect to MongoDB
mongoose.connect(mongoDbUrl, { useNewUrlParser: true })
    .then(response => {
        console.log("MongoDB Connected Successfully.");
    }).catch(err => {
        console.log("Database connection failed.");
});
 


/* Configure express*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use(express.static(path.join(__dirname, 'public')));
/*  Flash and Session*/
app.use(session({
    secret: 'anysecret',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());


/* Use Global Variables */
app.use(globalVariables);


/* File Upload Middleware*/


/* Setup View Engine To Use Handlebars */
app.engine('handlebars', hbs({defaultLayout: 'default'}));
app.set('view engine' , 'handlebars');


/* Method Override Middleware*/

/* Routes */
const defaultRoutes = require('./routes/defaultRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/', defaultRoutes);
app.use('/admin', adminRoutes);


/* Start The Server */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
