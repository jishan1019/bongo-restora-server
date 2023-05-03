const express = require('express')
const cors = require("cors")

const app = express()
app.use(cors())
const data = require("./data.json")
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/allChefData', (req, res) => {
    res.send(data)
})


app.listen(port, () => {
    console.log("App Running On Port");
})