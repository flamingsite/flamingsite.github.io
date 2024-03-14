const express = require('express')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
	res.render(fs.readFileSync('./index.html', 'utf8'))
})

app.listen(10000)