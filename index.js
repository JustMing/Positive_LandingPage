const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {

    return res.send('hello world')
})

app.listen(port, () => console.log(`Currently listening at port ${port}`));