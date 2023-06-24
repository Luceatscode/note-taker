const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const staticPath = path.join(__dirname, '..', 'public');
const fs = require('fs');
const filePath = path.join(__dirname, '..', 'db', 'db.json');
console.log('cheetoh',filePath);


app.use(express.static(staticPath));
app.get('/', (req, res) => {
    const filePath = path.join(staticPath, 'index.html');
    res.sendFile(filePath);
});

app.get('/notes', (req, res) => {
    const filePath = path.join(staticPath, 'notes.html');
    res.sendFile(filePath);
});

app.get('/api/notes', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      });
      
});

app.post('/api/notes', (req, res) => {

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})