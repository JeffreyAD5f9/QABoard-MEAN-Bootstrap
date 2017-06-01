app.factory('QuestionFactory', function($http, $cookies){
   var factory = {};
   var factoryQuestions = []

   factory.index = function(call){
     console.log('factoryIndexQ');
     $http.get('/quests').then(call);
   }
   factory.addQuestion = function(newQuestion, call){
     console.log('factoryAddQ');
     $http.post('/quests', newQuestion).then(call);
   }
   factory.showQuestion = function(id, call){
     console.log('factoryShowQ');
     $http.get('/quests/' + id).then(call);
  }
  factory.deleteQuestion = function(id, call){
    console.log('factoryDeleteQ');
    $http.delete('/quests/' + id).then(call);
  }
  factory.addVote = function(option, id, call){
    console.log('factoryVoteOp');
    console.log(option);
    console.log(id);
    $http.post('/vote/' + option + id).then(call);
  }


   return factory;
  })
