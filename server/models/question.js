var mongoose = require( 'mongoose' );


var QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Question field cannot be blank."],
    minlength: [8, "Name must be at least 8 characters."]
  },
  option1: {
    type: String,
    required: [true, "Poll option cannot be blank."],
    minlength: [3, "Name must be at least 3 characters."]
  },
  option2: {
    type: String,
    required: [true, "Poll option cannot be blank."],
    minlength: [3, "Name must be at least 3 characters."]
  },
  option3: {
    type: String,
    required: [true, "Poll option cannot be blank."],
    minlength: [3, "Name must be at least 3 characters."]
  },
  option4: {
    type: String,
    required: [true, "Poll option cannot be blank."],
    minlength: [3, "Name must be at least 3 characters."]
  },
  option1Votes: {
    type: Number,
    default: 0
  },
  option2Votes: {
    type: Number,
    default: 0
  },
  option3Votes: {
    type: Number,
    default: 0
  },
  option4Votes: {
    type: Number,
    default: 0
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true})

mongoose.model('Question', QuestionSchema);
