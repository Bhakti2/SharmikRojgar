const mongoose = require('mongoose');
const { Schema } = mongoose;
require('mongoose-type-url');
const jobSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  company: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  logo: {
    type: mongoose.SchemaTypes.Url,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  experience: {
    type: String,
    require: true
  },
  qualification: {
    type: String,
    require: true
  },
  employment_type: { 
    type: String, 
    require: true 
  }
})

const Job = mongoose.model('Job', jobSchema);

exports.Job = Job;