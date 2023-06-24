const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const staticPath = path.join(__dirname, '..', 'public');

app.use(express.static(staticPath));
app.get('/', (req, res) => {
    const filePath = path.join(staticPath, 'index.html');
    res.sendFile(filePath);
});

app.get('/notes', (req, res) => {
    const filePath = path.join(staticPath, 'notes.html');
    res.sendFile(filePath);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})