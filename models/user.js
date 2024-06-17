const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    details: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String
        },
        batch: {
            type: String
        }
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
            _id: this._id
        },
        process.env.JWTPRIVATEKEY, {
            expiresIn: "7d"
        }
    )
    return token;
}

const User = mongoose.model("User", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password"),
        details: Joi.object({
            name: Joi.string().required().label("Name"),
            email: Joi.string().email().required().label("Email"),
            phoneNumber: Joi.string().label("Phone Number"),
            batch: Joi.string().label("Batch")
        }).required().label("Details")
    });
    return schema.validate(data);
}

module.exports = { User, validate };