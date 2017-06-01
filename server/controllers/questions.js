
var mongoose = require( 'mongoose' );
var Question = mongoose.model('Question');
var User = mongoose.model('User');
var questions = {};

module.exports = {

  index: function(request, response){
    console.log('serverInitQ');
    Question.find({}).populate('user').exec(function(error, questions){
      if(error){
        return response.json(error);
      }
      return response.json(questions);
    })
  },
  showQuestion: function(request, response){
    console.log('serverShowQ');
    Question.findById(request.params.id, function(error, quest){
      if(error){
        return response.json(error);
      }
      if(!quest){
        return response.json({
          "errors": {
            "question": {
              "message": "Question not in Database"
            }
          }
        })
      }
      return response.json(quest);
    })
  },

  addQuestion: function(request, response){
    console.log('serverAddQ');
    console.log(request.body);
    Question.create(request.body, function(error, question){
      if(error){
        console.log('serverError')
        return response.json(error);
      }
      User.findByIdAndUpdate(request.body.user, { $push : { questions: question._id }}, function(error, user){
        if(error){
          console.log('userError')
          return response.json(error);
        }
        console.log(question);
        return response.json(question);
        })
      })
    },

  deleteQuestion: function(request, response){
    console.log('serverDelete');
    console.log(request.params.id);
    Question.findByIdAndRemove(request.params.id, function(error, question){
      if(error){
        return response.json(error);
      }
      return response.json(question);
    })
  },

  voteOption: function(request, response){
    console.log('serverVoteOp');
    console.log(request.params.id);
    console.log(request.params.num);
    if(request.params.num == '1'){
      Question.findByIdAndUpdate(request.params.id, { $inc : { option1Votes: 1 }}, function(error, question){
        if(error){
          return response.json(error);
        }
        if(!question){
          return response.json({
            "errors": "Option not in Database"
          })
        }
        return response.json(question);
      })
    }
    if(request.params.num == '2'){
      Question.findByIdAndUpdate(request.params.id, { $inc : { option2Votes: 1 }}, function(error, question){
        if(error){
          return response.json(error);
        }
        if(!question){
          return response.json({
            "errors": "Option not in Database"
          })
        }
        return response.json(question);
      })
    }
    if(request.params.num == '3'){
      Question.findByIdAndUpdate(request.params.id, { $inc : { option3Votes: 1 }}, function(error, question){
        if(error){
          return response.json(error);
        }
        if(!question){
          return response.json({
            "errors": "Option not in Database"
          })
        }
        return response.json(question);
      })
    }
    if(request.params.num == '4'){
      Question.findByIdAndUpdate(request.params.id, { $inc : { option4Votes: 1 }}, function(error, question){
        if(error){
          return response.json(error);
        }
        if(!question){
          return response.json({
            "errors": "Option not in Database"
          })
        }
        return response.json(question);
      })
    }

  }

  };
