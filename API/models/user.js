const mongoose = require("mongoose")
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: "Name is required"
    },
    email: {
        type: String,
        required: "Email is required",
        unique: true
    },
    password: {
        type: String,
        required: "password is required"
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    avatar: {
        type: String,
        required: false
    }
},
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('User', userSchema) 