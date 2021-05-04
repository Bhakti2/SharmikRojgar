const mongoose = require('mongoose');
const { Schema } = mongoose;
require('mongoose-type-url');

const userSchema = new Schema({
  uname: {
    type: String,
    unique: true,
    require: true
  },
  email: {
    type: mongoose.SchemaTypes.Url,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})


const User = mongoose.model('User', userSchema);
exports.User = User;  
