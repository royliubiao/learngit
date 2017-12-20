var  express = require('express')
var  app = express()

app.get('/', function(req, res) {
	console.error("故意设置的error");
    res.send('Hello Pm 5000');
});

app.listen(5000, function(){
	console.log('Example app listening on port 5000!')
} )