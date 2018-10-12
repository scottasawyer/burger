const express = require ('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'), //new technology for practice
	app = express(),
	PORT = process.env.PORT || 3000;

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controllers.js');

app.use('/', routes);
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})
