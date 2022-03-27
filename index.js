const express = require('express')

const port = 8000
const app = express()
const router = express.Router()
const routes = require('./routes/routes')
routes(router)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', router)


app.listen(port, () => { console.log("Listening on " + port) })