const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files (optional)
app.use(express.static('public'));


app.get('/user/:id', (req, res) => {
  const requestId = req.params.id;

  const database = [
    {
      id: 'tb',
      name: "Taha Murtaza Bombaywala",
      social: {
        instagram: 'https://www.instagram.com/bombay_14/',
        twitter: 'https://twitter.com/tahamurtaza'
      }
    },
    {
      id: 'ab',
      name: "Aliasgar ",
      social: {
        instagram: 'https://www.instagram.com/aliasgarmurtaza/',
        twitter: 'https://twitter.com/aliasgarmurtaza'
      }
    }
  ];

  const user = database.find(item => item.id === requestId);

  if (!user) {
    res.status(404).send('User not found');
    return;
  }

// Define a route to render HTML with data
app.get('/', (req, res) => {
  res.render('style1.html', { data }); // 'index' refers to the EJS template file
});


 

  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});