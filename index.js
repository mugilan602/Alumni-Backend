require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes');
const app = express();
const cors =require("cors")
app.use(express.json());
app.use(cors({
    credentials:true
}));
app.use('/api/user', userRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
