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
      name: "Aliasgar Murtaza",
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

  // HTML and CSS for a profile page with social links
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${user.name}'s Profile</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
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
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
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
        }
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          text-decoration: none;
          color: #3498db;
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
