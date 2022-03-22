const mongoose = require('mongoose');

module.exports = async () => {
    try {
       await mongoose.connect('mongodb://localhost:27017/mg_database1');
       console.log("MongoDB connected:( ");
    } catch (error) {
        console.log("MongoDB error",err);
    }
}