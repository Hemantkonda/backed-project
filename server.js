const express = require('express');
const serverConfig = require('./config/server.port');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config')
const userModel = require('./models/models')
const bcrypt = require('bcrypt');



const app = express();

/**
 * Logic to connect to MongoDB and create an ADMIN user
 * Need to have the mongodb up and running in your local machine
 */
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection ;

db.on("error", ()=>{
    console.log("Error while connecting to DB");
});

db.once("open", ()=>{
    console.log("DB is connected");

    init();
})

async function  init(){
    
    /**
     * Check if the admin user is already present
     */
    let admin = await userModel.findOne({
        userId : "admin"
    })

    if(admin){
        console.log("Admin user already present");
        return;
    }

    admin = await userModel.create( {
        name : "Hemant Konda",
        userId : "admin",
        email : "hemanthkon18@gmail.com",
        userType : "ADMIN",
        password : bcrypt.hashSync('hrx5443@', 8)
    });
    console.log(admin);

    
}

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server is running on port ${serverConfig.PORT}`);
});