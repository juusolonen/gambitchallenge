const fs = require('fs')

const getter = () => {

    return fs.readFileSync('readings.txt', 'utf8', (err, data) => {
        if (err) throw err
        return data
    })
}

module.exports= {getter}