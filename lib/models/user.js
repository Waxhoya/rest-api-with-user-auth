const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    groups: []
});

userSchema.methods.generateHash = function(password) {
    return this.password = bcrypt.hashSync(password, 8);
};
userSchema.methods.compareHash = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);