// You'll need to `npm install express`, of course.
var express = require('express'),

    // For a real-world app, you'd need to change the following line
    // to this:
    //impact = require('impact-weltmeister'),
    impact = require('../lib/weltmeister'),
    port = 8080,
    root = __dirname + '/impact',
    app = express();

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);
});

impact.listen(app, {root: root});

app.use(express.static(root));

app.listen(port);

console.log('app listening on port', port);