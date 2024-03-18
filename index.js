const express = require('express')
const app = express()
const port = 3000

// basic routing 


// get data
app.get('/mahasiswa', (req, res) => {
  res.send('ini get data')
})


// insert data (post)
app.post('/mahasiswa/post', (req, res) => {
    res.send('ini post data')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})