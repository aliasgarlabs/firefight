const express = require('express');
const app = express();
const port = 3000;

app.get('/user/:id', (req, res) => {
  const requestId = req.params.id;

  const database = [
    {
      id: 'tb',
      name: "Taha Murtaza Bombaywala",
      social: {
        instagram: 'https://www.instagram.com/tahamurtaza/',
        twitter: 'https://twitter.com/tahamurtaza'
      }
    },
    {
      id: 'ab',
      name: "Aliasgar Murtaza Bombay",
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

  // HTML and CSS for a modern profile page
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${user.name}'s Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        .profile-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 400px;
          width: 100%;
        }
        .profile-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 15px;
        }
        h1 {
          margin: 0;
          color: #333;
        }
        p {
          color: #666;
          margin-bottom: 20px;
        }
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          text-decoration: none;
          color: #3498db;
          transition: color 0.3s ease-in-out;
        }
        .social-links a:hover {
          color: #2980b9;
        }
      </style>
    </head>
    <body>
      <div class="profile-container">
        <img class="profile-image" src="https://placekitten.com/100/100" alt="Profile Image">
        <h1>${user.name}</h1>
        <p>ID: ${user.id}</p>
        <div class="social-links">
          <a href="${user.social.instagram}" target="_blank">Instagram</a>
          <a href="${user.social.twitter}" target="_blank">Twitter</a>
        </div>
      </div>
    </body>
    </html>
  `;

  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
