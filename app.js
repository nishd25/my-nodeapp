const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, this is my Node.js app running on AWS EC2!');
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
