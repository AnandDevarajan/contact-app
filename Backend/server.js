const express = require('express');
const app = express();

const port = process.env.port || 5000;

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to my app',
  });
});

app.listen(port, () => console.log(`App running on port ${port}`));
