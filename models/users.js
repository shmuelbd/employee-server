const mongoose = require("mongoose");
const { Schema } = mongoose;

const users = mongoose.Schema({
    name: { type: String, required: 'name is required!' },
    idNumber: { type: Number, required: 'id number is required!' },
    role: {
        type: String,
        default: "Employee",
    },
    manager: { type: Schema.Types.ObjectId, ref: 'users' },
});

module.exports = mongoose.model("users", users);