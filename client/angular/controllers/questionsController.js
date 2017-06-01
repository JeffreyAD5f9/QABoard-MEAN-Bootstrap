app.controller('QuestionsController', function (QuestionFactory, UserFactory, $location, $routeParams, $cookies){
  console.log('QuestionsController...')
  var self = this;
  self.options = [];
  self.newQuestion = {};
  self.newOption = {};
  self.questionErrors = [];
  self.optionErrors = [];

  self.index = function(){
    console.log('initializeQ');
    QuestionFactory.index(function(response){
      self.questions = response.data;
    })
  }

  self.addVote = function(number, id){
    console.log('voteOp');
    console.log(number);
    console.log(id);
    QuestionFactory.addVote(number, id, function(response){
      self.question = response.data;
    })
    self.displayQuestion();
  }

  self.addQuestion = function(newQuestion){
    console.log('addQ');
    self.errors = [];

    UserFactory.session(function(user){
      newQuestion.user = user._id;
      QuestionFactory.addQuestion(newQuestion, function(response){
        self.newQuestion = {};
        console.log(response);
        if(response.data.errors){
          for(key in response.data.errors){
            var error = response.data.errors[key]
            self.questionErrors.push(error.message);
          }
        }
        else {
          var question_id = response.data._id;
          $cookies.put('question_id', question_id);
          $location.url('/welcome');
        }
      })
    })
  }

  self.showQuestion = function(question_id){
    console.log('showQ');
    QuestionFactory.showQuestion(question_id, function(response){
      self.question = response.data;
      $location.url('/view/' + self.question._id);
    })
  }

  self.displayQuestion = function(){
    console.log('displayQ');
    QuestionFactory.showQuestion($routeParams.id ,function(response){
      self.question = response.data;
    })
  }

  self.return = function(user_id){
    console.log('returnQ');
    $location.url('/welcome')
  }

  self.deleteQuestion = function(question_id){
  console.log('deleteQ');
  QuestionFactory.deleteQuestion(question_id, function(response){
  })
  self.index();
}

});

//Mongo Shell:
//in Mongo window:
//
//show dbs -->Shows available dbs
//use -dbName- --> activates use of that db
//show collections --> shows models/collections
//db.-collectionName-.drop() --> removes all items in that collection
//
