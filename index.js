require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const app = express();
const port = process.env.PORT || 8080;

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.post("/profile", (req, res) => {
    console.log(req.body);
    return res.status(200).send("Success");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
