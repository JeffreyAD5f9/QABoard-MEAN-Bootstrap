
var Users = require('../controllers/users.js');
var Questions = require('../controllers/questions.js');


module.exports = function(app){
    app.get('/users', Users.index);
    app.post('/users', Users.addUser);
    app.post('/sessions', Users.loginUser);
    app.get('/users/:id', Users.showUser);

    app.get('/quests', Questions.index);
    app.post('/quests', Questions.addQuestion);
    app.get('/quests/:id', Questions.showQuestion);
    app.delete('/quests/:id', Questions.deleteQuestion);
    app.post('/vote/:num:id', Questions.voteOption);


}
