import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/testdb')
    .then(db => console.log("Database is Connected"))
    .catch(err => console.log(err))