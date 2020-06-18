const express = require('express')
const cors = require('cors')
const parser = require('./utils/parser')
const fs = require('fs')
const WebSocket = require('ws')

const app = express()
app.use(express.json())
app.use(cors())

const wss = new WebSocket.Server({ port: 8080 })
wss.on('connection', function connection(ws) {
    let lastDate = ''
    fs.watch('readings.txt', (e, file) => {

        if(file){
            let received = parser.getter()
            let parsed = parser.parse(received)
            if(lastDate !== parsed.date){
                lastDate = parsed.date
                ws.send(JSON.stringify(parsed))
            } else {
                console.log('ei kay')
            }

        }})
})


app.get('/', (req, res) => {
    let received = parser.getter()
    let parsed = parser.parse(received)
    res.status(200).send(parsed)
})


const PORT = 3003
app.listen(PORT, () => {
    console.log(`Open in port ${PORT}`)
})

