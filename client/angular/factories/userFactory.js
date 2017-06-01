app.factory('UserFactory', function($http, $cookies){
   var factory = {};
   var factoryUsers = []

   factory.index = function(call){
     console.log('factoryIndexU');
     $http.get('/users').then(call);
   }
   factory.session = function(call){
     console.log('factorySessionU');
     var user_id = $cookies.get("user_id")
     if (!user_id){
       return call(false);
     }
     else{
       $http.get('/users/' + user_id).then(function(response){
         call(response.data);
       });
     }
   }
   factory.addUser = function(newUser, call){
     console.log('factoryAddU');
     $http.post('/users', newUser).then(call);
   }
   factory.showUser = function(id, call){
     console.log('factoryShowU');
     $http.get('/postQuest/' + id).then(call);
  }
  factory.loginUser = function(userLog, call){
    console.log('factoryLoginU');
    console.log(userLog);
    $http.post('/sessions', userLog).then(call);
  }


   return factory;
  })
