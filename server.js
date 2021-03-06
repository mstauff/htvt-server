
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/index.js');
var memberRoutes = require('./routes/members.js');
var districtRoutes = require('./routes/districts.js');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080 );
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/config', routes.mobileConfig);
app.get('/htvt/services/v1/:unitNum/districts/:auxId', districtRoutes.districtList);
app.get('/htvt/services/v1/:unitNum/members/', memberRoutes.memberList);
app.post('/htvt/services/v1/:unitNum/visits/record', districtRoutes.recordVisit);
//app.get('/htvt/services/v1/:unitNum/visits/latestByOrganization/:auxId', districtRoutes.visitsByOrg);


http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
