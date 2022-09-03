const bodyParser = require('body-parser')
const express = require('express')
const routes = require('./routes')
const port = process.env.PORT || 8008
const cors = require('cors')
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




app.listen(port, '127.0.0.1', () => {
    console.log(`server is running on port ${port} ------------------------------------------------------------------`)
})
