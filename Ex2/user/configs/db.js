const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/db_tp10_ex2');
        console.log("MongoDB connected :( ");
    } catch (error) {
        console.log("MongoDB error :", error);
    }
}