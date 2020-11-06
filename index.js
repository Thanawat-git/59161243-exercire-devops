const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const items = [
    {no: '1', name: 'Iphone 12 Pro Max'},
    {no: '2', name: 'Iphone 12'},
    {no: '3', name: 'Iphone 11'}
]

app.get('/', (req, res) => {
    return res.send('Hello!')
})

app.get('/item', (req, res) => {
    return res.json(items)
})

app.listen(port, () => {
    console.log(`Start Express application at ${port}`)
})

module.exports = app