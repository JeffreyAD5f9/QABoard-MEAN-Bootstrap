
var express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    port     = process.env.PORT || 8000,
    app      = express();

app.use( express.static(__dirname + '/client' ));
app.use( express.static(__dirname + '/bower_components' ));
app.use(bp.json())

require('./server/config/mongoose');

require('./server/config/routes')(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
