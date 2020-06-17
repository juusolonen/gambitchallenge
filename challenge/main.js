const express = require('express')
const cors = require('cors')
const getter = require('./utils/getter')
const parser = require('./utils/parser')
const fs = require('fs')

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    let received = getter.getter()
    let parsed = parser.parse(received)
    let final = parser.modify(parsed)
    res.status(200).send(final)
})

app.get('/stream', (req, res) => {


    res.set({
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive'
    })
    
    let lastDate = ''
    fs.watch('readings.txt', (e, file) => {

        if(file){
            let received = getter.getter()
            let parsed = parser.parse(received)
            let final = parser.modify(parsed)
            if(lastDate !== final.date){
                lastDate = final.date
                res.write(JSON.stringify(final))
                console.log('sent')
            } else {
                console.log('ei kay')
            }

        }})
    

})


const PORT = 3003
app.listen(PORT, () => {
    console.log(`Open in port ${PORT}`)
})

