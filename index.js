const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve tutti i file statici (HTML, CSS, immagini)
app.use(express.static(__dirname));

// Pagina principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
