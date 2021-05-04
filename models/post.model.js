const mongoose = require('mongoose');
const { Schema } = mongoose;
require('mongoose-type-url');
const postSchema = new Schema({
  avatar: {
    type: mongoose.SchemaTypes.Url,
    require: true
  },
  user: {
    type: String,
    require: true
  },
  designation: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  img: {
    type: mongoose.SchemaTypes.Url,
  }
})

const Post = mongoose.model('Post', postSchema);

exports.Post = Post;