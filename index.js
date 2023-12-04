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
      name: "Aliasgar Murtaza Bombaywala"
    }
  ];

  const result = database.find(item => item.id === requestId).name;

  // HTML and CSS for a basic design
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Express App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          text-align: center;
          margin: 20px;
        }
        .container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello ${result}</h1>
      </div>
    </body>
    </html>
  `;

  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});