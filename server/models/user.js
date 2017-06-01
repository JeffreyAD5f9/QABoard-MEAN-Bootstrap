var mongoose = require( 'mongoose' );


var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Username cannot be blank."],
    maxlength: [120, "Name cannot exceed 120 characters."]
  },
  questions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }
}, {timestamps: true})

mongoose.model('User', UserSchema);
