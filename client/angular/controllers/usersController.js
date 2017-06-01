app.controller('UsersController', function (UserFactory, $location, $routeParams, $cookies){
  console.log('UsersController...')
  var self = this;
  self.users = [];
  self.regErrors = [];
  self.logErrors = [];

  self.session = function(){
    console.log('session')
    UserFactory.session(function(user){
      if(!user){
        $location.url('/');
      }
      else{
        self.user = user;
      }
    })
  }

  self.index = function(){
    console.log('initializeU');
    UserFactory.index(function(response){
      self.users = response.data;
    })
  }

  self.addUser = function(newUser){
    console.log('addU');
    self.regErrors = [];
    UserFactory.addUser(newUser, function(response){
      if(response.data.errors){
        for(key in response.data.errors){
          var error = response.data.errors[key]
          self.regErrors.push(error.message);
        }
      }
      else {
        var user_id = response.data._id;
        $cookies.put('user_id', user_id);
        $location.url('/welcome');
      }
    })
  }

  self.showUser = function(user_id){
    console.log('showU');
    UserFactory.showUser($routeParams.id, function(response){
      self.user = response.data;
      $location.url('/post/' + self.user.id);
    })
  }


  self.loginUser = function(userLog){
    console.log('loginU');
    self.logErrors = [];
      UserFactory.loginUser(userLog, function(response){
        if(response.data.errors){
          for(key in response.data.errors){
            var error = response.data.errors[key];
            self.logErrors.push(error.message);
          }
        }
        else {
          $cookies.put('user_id', response.data._id);
          $location.url('/welcome');
        }
      })
  }

  self.logout = function(user_id){
    console.log('logoutU');
    $cookies.remove('user_id');
    $location.url('/');
  }


});
