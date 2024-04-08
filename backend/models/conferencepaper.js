const mongoose = require('mongoose');

// Define the schema
const Schema = mongoose.Schema;

const ConferencePaperSchema = new Schema({
  paperName: {
    type: String,
    required: true
  },
  paperLocation: {
    type: String,
    required: true
  },
  reviewers: [{
    name: String,
    overallScore: Number,
    privateComments: String
  }],
  totalMarks:{
    type:Number
  },
  isApproved:{
    type:Boolean
  },
  OverallReview:{
    type:String
  },
  paperState:{
    type:String,
    default:"draft"
  }
}, { timestamps: new Date() },); // Adding timestamps for creation and updates

// Create the model from the schema
const ConferencePaper = mongoose.model('ConferencePaper', ConferencePaperSchema);

module.exports = ConferencePaper;
