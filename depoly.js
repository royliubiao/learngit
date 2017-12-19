var shell = require('shelljs');
shell.exec("npm install --production");
shell.exec("pm2 restart pm2.json");