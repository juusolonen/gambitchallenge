const fs = require('fs')

const getter = () => {
    return fs.readFileSync('readings.txt', 'utf8', (err, data) => {
        if (err) throw err
        return data
    })
}

const parse = (items) => {
    let splitted = items.split('\r\n')

    let data = {date: splitted[0], registers: []}

    splitted.forEach(item => {
        let newItem = item.split(':')
        let regObject = {}
        regObject.regNum = newItem[0]
        regObject.value = newItem[1]
        data.registers.push(regObject)
    })
    data.registers.shift()
  
    return data
}



module.exports = {parse, getter}