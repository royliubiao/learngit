var  express = require('express')
var  app = express()

app.get('/', function(req, res) {
	console.error("故意设置的error");
    res.send('Hello Pm2123123123');
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
} )