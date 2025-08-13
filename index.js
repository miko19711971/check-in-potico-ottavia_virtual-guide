 // index.js — static server for your check-in guide
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app = express();
app.disable('x-powered-by');
app.use(cors());

// Servi tutto da /public (HTML + immagini)
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d',
  etag: true,
  lastModified: true
}));

// Homepage → checkin.html
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'checkin.html'));
});

const port = process.env.PORT || 8787;
app.listen(port, () => console.log('Check-in guide up on http://localhost:' + port));
