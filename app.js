const bodyParser = require('body-parser')
const express = require('express')
const routes = require('./routes')
const port = process.env.PORT || 8008
const cors = require('cors')
const fs = require('fs')
const https = require('https')
const http = require('http')
const path = require('path')
const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
app.use(routes)
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'))
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.set('views', __dirname + '/views');


const server = http.createServer((req, res) => {
  res.writeHead(301,{Location: `https://${req.headers.host}${req.url}`});
  res.end();
});

server.listen(80);
console.log(`http2https ==> 80:443`);

const httpsServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname , 'cert','key.pem')),
  cert: fs.readFileSync(path.join(__dirname , 'cert','cert.pem')),
}, app);

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});

