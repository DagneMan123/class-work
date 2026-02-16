const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    account: { type: String, required: true },
    sex: { type: String, required: true },
    phonenumber: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);