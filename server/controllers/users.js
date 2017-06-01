
var mongoose = require( 'mongoose' );
var User = mongoose.model('User');


module.exports = {

  index: function(request, response){
    console.log('serverInitU');
    User.find({}, function(error, users){
      if(error){
        return response.json(error);
      }
      return response.json(users);
    })
  },
  showUser: function(request, response){
    console.log('serverShowU');
    User.findById(request.params.id, function(error, user){
      if(error){
        return response.json(error);
      }
      if(!user){
        return response.json({
          "errors": {
            "login": {
              "message": "User not in Database"
            }
          }
        })
      }
      return response.json(user);
    })
  },
  addUser: function(request, response){
    console.log('serverAddU');
    User.create(request.body, function(error, user){
      if(error){
        return response.json(error);
      }
      return response.json(user);
    })
  },
  loginUser: function(request, response){
    console.log('serverLoginU');
    User.findOne({ name: request.body.name }, function(error, user){
      if(error){
        return response.json(error);
      }
      if(!user){
        return response.json({
          "errors": {
            "login": {
              "message": "User not in Database"
            }
          }
        })
      }
      return response.json(user);
    })
  },


};
