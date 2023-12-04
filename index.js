const express = require('express');
const app = express();
const port = 3000;

app.get('/user/:id', (req, res) => {
  const requestId = req.params.id;

  const database = [
    {
      id: 'tb',
      name: "Taha Murtaza Bombaywala"
    },
    {
      id: 'ab',
      name: "Aliasgar Murtaza"
    }
  ];

  const result = database.find(item => item.id === requestId).name;

  res.send(`Hello ${result}`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});