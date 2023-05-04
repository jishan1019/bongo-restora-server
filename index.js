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

app.get('/allChefData/:id', (req, res) => {
    const chefId = req.params.id
    const chef = data.find(c => c.id === parseInt(chefId))
    if (!chef) {
        return res.status(404).send("Chef not found")
    }
    res.send(chef)
})

app.listen(port, () => {
    console.log("App Running On Port");
})