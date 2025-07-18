const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CI/CD Demo App</title>
        <style>
          body { font-family: Arial; text-align: center; padding-top: 50px; }
          h1 { color: #2c3e50; }
        </style>
      </head>
      <body>
        <h1>🚀 Hello from CI/CD Web App!</h1>
        <p>This app is deployed automatically using GitHub Actions.</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
