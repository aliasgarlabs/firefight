const express = require('express')
const app = express()
const port = 3000

app.get('/user/:id', (req, res) => {
  var request_id = req.params.id;

  var database = [
    {
      id: 'tb',
      name: "Taha Murtaza Bombaywala"
    },
    {
      id: 'ab',
      name: "Aliasgar Murtaza"
    }
  ]

  var result = database.find((i) => i.id === request_id).name;

  res.send(`Hello ${result}`)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})