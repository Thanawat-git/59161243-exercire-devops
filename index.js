const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const items = [
    {no: '1', name: 'Iphone 12 Pro Max'}
]

app.get('/', (req, res) => {
    return res.send('He')
})

// function getItem(){
//     return items
// }

app.get('/item', (req, res) => {
    return res.json(items)
})

app.listen(port, () => {
    console.log(`Start Express application at ${port}`)
})

module.exports = app