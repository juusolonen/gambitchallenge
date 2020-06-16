const express = require('express')
const cors = require('cors')
const getter = require('./utils/getter')
const parser = require('./utils/parser')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    let received = getter.getter()
    let parsed = parser.parse(received)
    let final = parser.modify(parsed)
    res.status(200).send(final)
})


const PORT = 3003
app.listen(PORT, () => {
    console.log(`Open in port ${PORT}`)
})

