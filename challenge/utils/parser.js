

const parse = (items) => {
    return items.split('\r\n')
}

const modify = (itemlist) => {
    let data = {date: itemlist[0], registers: []}

    itemlist.forEach(item => {
        let newItem = item.split(':')
        let regObject = {}
        regObject.regNum = newItem[0]
        regObject.value = newItem[1]
        data.registers.push(regObject)
    })
    data.registers.shift()
  
    return data

}

module.exports = {parse, modify}