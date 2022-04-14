const express = require('express')
const app = express()
const port = 5000
app.use(express.static('data'));


app.get('/', (req, res) => {
    res.sendFile(__dirname +'/data/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})