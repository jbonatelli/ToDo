const fs = require('fs')
const logFileName = 'log.txt'

const log = (content) => {
    const currentDate = new Date()
    fs.appendFile(logFileName, `${currentDate} -> ${content}\n`)
}

module.exports = log