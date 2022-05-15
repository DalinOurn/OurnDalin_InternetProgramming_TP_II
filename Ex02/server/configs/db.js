const mongoose = require('mongoose')

module.exports = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mgdb_tp12_2');
        console.log("MongoDB connected :(");
    } catch (error) {
        console.log("MongoDB err: ", error);
    }
}