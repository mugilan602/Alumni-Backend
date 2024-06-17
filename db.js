const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("Connected to Database Successfully");
    } catch (err) {
        console.error("Error connecting to database:", err);
    }
}
