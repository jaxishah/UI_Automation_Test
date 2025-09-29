const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('demo-site'));
app.listen(port, () => console.log(`Demo site ready: http://localhost:${port}`));


